<template>
  <div
    class="toggle-menu-icon"
    :style="toggleIconStyle"
    v-html="toggleIcon"
    @click="toggle"
  ></div>
</template>

<script>
export default {
  name: "Toggle",
  computed: {
    collapsed() {
      return this.$store.state.settings.collapsed;
    },
    toggleIcon() {
      if (this.collapsed) {
        return this.$store.getters.openIcon;
      } else {
        return this.$store.getters.closeIcon;
      }
    },
    toggleIconStyle() {
      return {
        fill: this.$store.state.settings.fontColor
      };
    }
  },
  methods: {
    toggle() {
      if (this.collapsed) {
        this.$router.push("/");
      }
      this.$store.commit("update", { collapsed: !this.collapsed });
    }
  }
};
</script>

<style scoped lang="scss">
.toggle-menu-icon {
  width: 1.5em;
  margin-right: 0.05em;
}
</style>
