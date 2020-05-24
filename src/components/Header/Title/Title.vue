<!--suppress CssNoGenericFontName -->
<template>
  <div class="header-title">
    {{ this.$t("header.title") }}
  </div>
</template>

<script>
export default {
  name: "Title"
};
</script>

<style scoped lang="scss">
.header-title {
  @extend .align-left;
  max-width: 50%;
  font-size: 16px !important;
  font-family: "Lato, serif" !important;
}
</style>
