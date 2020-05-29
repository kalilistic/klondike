<template>
  <div>
    <div class="questions feedback">{{ this.$t("default.questions") }}</div>
    <div class="link feedback" :style="link" @click="openDiscord">
      {{ this.$t("default.discord") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Discord",
  computed: {
    link() {
      return {
        color: this.$store.state.settings.fontColor
      };
    }
  },
  methods: {
    openDiscord() {
      window.open("https://discord.gg/ftn4k7x", "_blank");
    }
  }
};
</script>

<style scoped lang="scss">
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
