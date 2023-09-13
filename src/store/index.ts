import { createStore } from "vuex";
import { User } from "@/types/models";
import axios from "axios";

export default createStore({
  modules: {
    search: {
      namespaced: true,
      state: {
        searchInput: "",
        searchResults: [] as User[],
        activeUser: null,
        allUsers: [] as User[],
      },
      mutations: {
        setSearchInput(state, input) {
          state.searchInput = input;
        },
        setSearchResults(state, results) {
          state.searchResults = results.filter(
            (user: any) =>
              !user.email
                .toLowerCase()
                .includes(state.searchInput.toLowerCase().trim())
          );
        },
        setActiveUser(state, user) {
          state.activeUser = user;
        },
        setAllUsers(state, users) {
          state.allUsers = users;
        },
      },
      actions: {
        async fetchAllUsers({ commit }) {
          try {
            const response = await axios.get(
              "https://jsonplaceholder.typicode.com/users"
            );
            const users = response.data;
            commit("setAllUsers", users);
          } catch (error) {
            console.error(
              "Ошибка при получении данных о пользователях:",
              error
            );
          }
        },
        async performSearch({ commit, state }) {
          const query = state.searchInput.trim();

          if (query === "") {
            commit("setSearchResults", []);
            return;
          }

          const keywords = query
            .split(",")
            .map((keyword: string) => keyword.trim());

          const filteredUsers = state.allUsers.filter((user: User) => {
            if (!isNaN(keywords[0])) {
              return keywords.includes(user.id.toString());
            } else {
              return keywords.some(
                (keyword: string) =>
                  user.name.toLowerCase().includes(keyword) &&
                  !user.email.toLowerCase().includes(keyword)
              );
            }
          });

          commit("setSearchResults", filteredUsers);
        },
        setActiveUser({ commit }, user) {
          commit("setActiveUser", user);
        },
      },
      getters: {
        hasResults(state) {
          return state.searchResults.length > 0;
        },
      },
    },
  },
});
