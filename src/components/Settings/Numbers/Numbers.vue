<template>
  <v-content>
    <Checkbox
      label="settings.abbreviate-numbers"
      v-bind:initialCheckboxValue="settings.abbreviateNumbers"
      @change="settings.abbreviateNumbers = $event"
    />
    <Slider
      label="settings.precision"
      v-bind:min="0"
      v-bind:max="2"
      v-bind:initial-slider-value="settings.precision"
      v-bind:formatter="'{value}'"
      @change="settings.precision = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Checkbox from "../../Common/Checkbox";
import Slider from "../../Common/Slider";

export default {
  name: "Numbers",
  components: { Checkbox, Slider, SettingButtons },
  data() {
    return {
      settings: {
        abbreviateNumbers: this.$store.state.settings.abbreviateNumbers,
        precision: this.$store.state.settings.precision
      }
    };
  },
  methods: {
    reset() {
      this.$emit("reset", this.settings);
    },
    update() {
      this.$emit("update", this.settings);
    }
  }
};
</script>
