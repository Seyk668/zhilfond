<template>
  <div class="input-search">
    <input
      :value="searchInput"
      placeholder="Введите Id или имя"
      @input="updateSearchInput($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default defineComponent({
  computed: {
    ...mapState("search", ["searchInput"]),
  },
  methods: {
    ...mapMutations("search", ["setSearchInput"]),
    ...mapActions("search", ["performSearch"]),
    async updateSearchInput(event: Event) {
      this.setSearchInput((event.target as HTMLInputElement).value);
      await this.performSearch();
    },
  },
});
</script>

<style lang="scss" scoped>
.input-search {
  margin-bottom: 29px;

  input {
    display: flex;
    width: 100%;
    padding: 16px;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    border: 1.5px solid #e9ecef;
    background: #fff;
    box-sizing: border-box;
    color: #76787d;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
