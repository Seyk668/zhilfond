<template>
  <div class="result">
    <div class="title">Результаты</div>
    <div v-if="hasResults">
      <div
        v-for="user in searchResults"
        :key="user.id"
        class="user-card"
        @click="setActiveUser(user)"
      >
        <div class="img"></div>
        <div
          :class="['user-info', { 'user-info active': user === activeUser }]"
        >
          <div class="name">{{ user.name }}</div>
          <div class="email">{{ user.email }}</div>
        </div>
      </div>
    </div>
    <div v-else class="subtitle">
      <div v-if="searchInput.trim() === ''">Начните поиск</div>
      <div v-else-if="searchResults.length === 0">Ничего не найдено</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("search", ["searchResults", "searchInput", "activeUser"]),
    hasResults() {
      return this.searchResults.length > 0;
    },
  },
  methods: {
    ...mapMutations("search", ["setSearchInput"]),
    ...mapActions("search", ["setActiveUser"]),
  },
});
</script>

<style lang="scss" scoped>
.title {
  text-align: left;
}

.subtitle {
  margin-top: 10px;
  color: #76787d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.user-card {
  display: flex;
  height: 70px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  margin-top: 18px;
  cursor: pointer;

  .img {
    min-width: 70px;
    height: 100%;
    background: url("../../public/img.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .user-info {
    padding: 15px 0 0 15px;
    white-space: nowrap;
    overflow-y: hidden;
    text-overflow: ellipsis;
    width: 100%;

    .name {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: #333;
      margin-bottom: 5px;
    }

    .email {
      color: #76787d;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .user-info:hover,
  .user-info.active {
    background: #e0e0e0;
  }
}
</style>
