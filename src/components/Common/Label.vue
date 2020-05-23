<template>
  <span class="label">{{ translatedLabel }}</span>
</template>

<script>
export default {
  name: "Label",
  props: ["label"],
  data() {
    return {
      translatedLabel: this.$t(this.label)
    };
  }
};
</script>

<style scoped lang="scss">
.label {
  font-size: 0.95rem !important;
}
</style>
