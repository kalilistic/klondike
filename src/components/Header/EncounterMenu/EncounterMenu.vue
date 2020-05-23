<template>
  <v-menu bottom left class="encounter-menu">
    <template v-slot:activator="{ on }">
      <div
        class="encounter-menu-icon"
        :style="encounterMenuIconStyle"
        v-html="encounterMenuIcon"
        v-on="on"
      ></div>
    </template>
    <v-list class="encounter-menu-style" :style="encounterMenuStyle">
      <v-list-item
        class="encounter-menu-item"
        v-for="(menuItem, i) in menuItems"
        :key="i"
        @click="selectMenuItem(menuItem)"
      >
        <v-list-item-title :style="encounterMenuStyle">{{
          menuItem.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { getMenuIcon } from "../../../lib/icons";
import { AddTestCombatData } from "../../../lib/combatData";

export default {
  name: "EncounterMenu",
  computed: {
    menuItems() {
      return [
        { title: this.$t("actions.view-encounter"), path: "/encounter" },
        { title: this.$t("actions.reset-encounter"), path: "/" },
        {
          title: this.$t("actions.load-sample-data"),
          action: "loadSampleData",
          path: "/encounter"
        }
      ];
    },
    encounterMenuIcon() {
      return getMenuIcon();
    },
    encounterMenuStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    encounterMenuIconStyle() {
      return {
        fill: this.$store.state.settings.fontColor
      };
    }
  },
  methods: {
    selectMenuItem(menuItem) {
      if (menuItem.action) {
        eval("this." + menuItem.action + "()");
      }
      if (menuItem.path) {
        this.$router.push(menuItem.path);
      }
    },
    loadSampleData() {
      AddTestCombatData(this);
    }
  }
};
</script>

<style scoped lang="scss">
.encounter-menu-style {
  @extend .default-border;
}
.encounter-menu-icon {
  width: 1.4em;
}
.encounter-menu-item {
  min-height: 1.8em;
}
</style>
