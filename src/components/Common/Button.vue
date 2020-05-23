<template>
  <v-btn
    class="button"
    small
    :style="buttonStyle"
    :ripple="false"
    v-on:click="click"
    >{{ translatedLabel }}</v-btn
  >
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String
  },
  data() {
    return {
      translatedLabel: this.$t(this.label)
    };
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.$store.state.settings._controlColor
      };
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  margin-top: 1em;
  margin-left: 0.3em;
}
.button:nth-child(2) {
  margin-left: 1em;
}
</style>
