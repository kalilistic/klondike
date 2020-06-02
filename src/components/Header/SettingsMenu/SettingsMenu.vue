<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <div
        class="settings-menu-icon"
        :style="settingsMenuIconStyle"
        v-html="settingsMenuIcon"
        v-on="on"
      ></div>
    </template>
    <v-list class="settings-menu-style" :style="settingsMenuStyle">
      <v-list-item
        class="settings-menu-item"
        v-for="(menuItem, i) in menuItems"
        :key="i"
        @click="selectMenuItem(menuItem)"
      >
        <v-list-item-title :style="settingsMenuStyle">{{
          menuItem.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { getSettingsIcon } from "../../../lib/icons";
export default {
  name: "SettingsMenu",
  computed: {
    menuItems() {
      return [
        { title: this.$t("views.general-style"), path: "/settings/general" },
        { title: this.$t("views.names"), path: "/settings/names" },
        { title: this.$t("views.numbers"), path: "/settings/numbers" },
        { title: this.$t("views.job-icons"), path: "/settings/job-icons" },
        { title: this.$t("views.percent-bar"), path: "/settings/percent-bar" },
        {
          title: this.$t("views.percent-bar-role"),
          path: "/settings/percent-bar-role"
        },
        {
          title: this.$t("views.advanced"),
          path: "/settings/advanced"
        }
      ];
    },
    settingsMenuIcon() {
      return getSettingsIcon();
    },
    settingsMenuStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    settingsMenuIconStyle() {
      return {
        fill: this.$store.state.settings.fontColor
      };
    }
  },
  methods: {
    selectMenuItem(menuItem) {
      this.$store.commit("update", { collapsed: false });
      this.$router.push(menuItem.path);
    }
  }
};
</script>

<style scoped lang="scss">
.settings-menu-style {
  @extend .default-border;
  @extend .no-spacing;
  padding: 0.8em 1.4em 0.8em 1.4em;
  font-size: 0.8rem;
}
.settings-menu-icon {
  width: 1.4em;
  margin-right: 0.4em;
}
.settings-menu-item {
  @extend .no-spacing;
  min-height: 2em;
}
</style>
