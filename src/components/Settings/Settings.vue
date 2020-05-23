<template>
  <router-view
    @reset="reset"
    @update="update"
    class="settings"
    :style="settingsStyle"
  />
</template>

<script>
import { setLocale } from "../../lib/locale";

export default {
  name: "Settings",
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (!vm.$store.state.settings.collapsed) {
        next();
      } else {
        next("/");
      }
    });
  },
  computed: {
    settingsStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        padding: "0.6em 0 0 0.8em"
      };
    }
  },
  methods: {
    reset(settings) {
      this.$store.commit("reset", settings);
      setLocale(this);
      this.$router.push("/");
    },
    update(settings) {
      this.$store.commit("update", settings);
      setLocale(this);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.settings {
  @extend .default-border;
  @extend .no-line-break;
  @extend .no-spacing;
  border-top: 0;
}
</style>
