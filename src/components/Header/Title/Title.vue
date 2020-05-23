<template>
  <div class="title">
    {{ this.$t("header.title") }}
  </div>
</template>

<script>
export default {
  name: "Title"
};
</script>

<style scoped lang="scss">
.title {
  @extend .align-left;
  max-width: 50%;
  font-size: 12px !important;
}
</style>
