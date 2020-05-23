<template>
  <div
    class="toggle-menu-icon"
    :style="toggleIconStyle"
    v-html="toggleIcon"
    @click="toggle"
  ></div>
</template>

<script>
import { getCloseIcon, getOpenIcon } from "../../../lib/icons";
export default {
  name: "Toggle",
  data() {
    return {
      settings: {
        collapsed: this.$store.state.settings.collapsed
      }
    };
  },
  computed: {
    toggleIcon() {
      if (this.settings.collapsed) {
        return getOpenIcon();
      } else {
        return getCloseIcon();
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
      this.settings.collapsed = !this.settings.collapsed;
      this.$store.commit("update", this.settings);
      this.$router.push("/encounter");
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
