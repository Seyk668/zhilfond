<template>
  <div class="user-profile" v-if="activeUser">
    <div class="container">
      <div class="img"></div>
      <div class="user-info">
        <div class="name">{{ activeUser.name }}</div>
        <div class="info"><span>email:</span> {{ activeUser.email }}</div>
        <div class="info"><span>phone:</span> {{ activeUser.phone }}</div>
        <div class="about">О себе:</div>
        <div class="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </div>
  <div class="start" v-else>
    Выберите сотрудника, чтобы посмотреть его профиль
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("search", ["activeUser"]),
  },
});
</script>

<style lang="scss" scoped>
.user-profile {
  padding: 21px 30px;

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .img {
    width: 45%;
    background: url("../../public/ProfileImg.png");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .user-info {
    width: 48%;

    .name {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }

    .info {
      color: #76787d;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      margin-top: 10px;

      span {
        color: #333;
        font-weight: 600;
      }
    }

    .about {
      color: #333;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      margin-top: 20px;
      margin-bottom: 15px;
    }
  }
}
.start {
  color: #76787d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
</style>
