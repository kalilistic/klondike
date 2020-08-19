<template>
  <div>
    <div class="questions feedback">{{ this.$t("default.questions") }}</div>
    <div class="link feedback" :style="link" @click="openGithub">
      {{ this.$t("default.github") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Github",
  computed: {
    link() {
      return {
        color: this.$store.state.settings.fontColor
      };
    }
  },
  methods: {
    openGithub() {
      window.open("https://github.com/kalilistic/klondike", "_blank");
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
