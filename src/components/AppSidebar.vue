<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <div class="title">Поиск сотрудников</div>
      <SearchInput />
      <SearchResults />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "./SearchInput.vue";
import SearchResults from "./SearchResults.vue";

export default defineComponent({
  components: {
    SearchInput,
    SearchResults,
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 290px;
  width: 23%;
  height: 100%;
  border-right: 1px solid #e0e0e0;

  .sidebar-container {
    padding: 27px 31px 0 20px;
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    height: 100%;
    max-height: 532px;
    overflow-y: auto;

    .title {
      text-align: left;
      margin-bottom: 22px;
    }
  }
}
</style>
