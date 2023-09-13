<template>
  <AppHeader />
  <div class="container">
    <AppSidebar />
    <UserProfile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/AppSidebar.vue";
import UserProfile from "./components/UserProfile.vue";
export default defineComponent({
  name: "App",
  components: {
    AppHeader,
    AppSidebar,
    UserProfile,
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 575px;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  margin: 0 50px 44px;
}
body {
  margin: 0;
  box-sizing: border-box;
}
p {
  margin: 0;
}
</style>
