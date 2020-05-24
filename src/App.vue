<template>
  <v-app :style="appStyle">
    <Header />
    <router-view />
  </v-app>
</template>

<script>
import Header from "./components/Header/Header";
import { addCombatDataListener, startOverlay } from "./lib/overlay";
import { setLocale } from "./lib/locale";
require("typeface-lato");

export default {
  name: "Overlay",
  components: {
    Header
  },
  computed: {
    appStyle() {
      return {
        fontFamily: "Lato, serif",
        backgroundColor: "transparent",
        color: this.$store.state.settings.fontColor,
        fill: this.$store.state.settings.iconColor,
        opacity: this.$store.state.settings.opacity / 100
      };
    }
  },
  mounted() {
    if (this.$router.currentRoute.path !== "/") {
      this.$router.push("/");
    }
    addCombatDataListener(this);
    startOverlay();
    setLocale(this);
  }
};
</script>

<style lang="scss">
.column {
  @extend .no-spacing;
}
.row {
  margin-left: 0.3em;
}
</style>

<style>
html,
body {
  font-size: 13px !important;
  font-family: Lato, serif !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body::-webkit-scrollbar {
  display: none;
}
</style>
