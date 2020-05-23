<template>
  <v-content class="default" :style="defaultStyle">
    <div class="waiting">{{ this.$t("default.waiting") }}</div>
    <div class="questions feedback">{{ this.$t("default.questions") }}</div>
    <div class="link feedback" :style="link" @click="openDiscord">
      {{ this.$t("default.discord") }}
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Default",
  computed: {
    link() {
      return {
        color: this.$store.state.settings.fontColor
      };
    },
    defaultStyle() {
      return {
        display: this.$store.state.settings._mainDisplay,
        backgroundColor: this.$store.state.settings.backgroundColor
      };
    }
  },
  methods: {
    openDiscord() {
      window.open("https://discord.gg/ftn4k7x", "_blank");
    }
  },
  mounted() {
    this.$store.commit("resetCombatData");
  }
};
</script>

<style scoped lang="scss">
.default {
  @extend .default-border;
  @extend .align-center;
  @extend .no-line-break;
  border-top: 0;
}
.waiting {
  font-size: 1.25rem;
  margin-bottom: 1.5em;
}
.questions {
  margin-bottom: 0.25em;
}
.link {
  text-decoration: underline;
  cursor: pointer;
  mix-blend-mode: difference;
  filter: brightness(90%);
}
.feedback {
  font-size: 0.9rem;
}
</style>
