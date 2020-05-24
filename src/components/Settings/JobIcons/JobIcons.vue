<template>
  <v-content>
    <Checkbox
      label="settings.job-icons"
      v-bind:initialCheckboxValue="settings.jobIcons"
      @change="settings.jobIcons = $event"
    />
    <Checkbox
      label="settings.blur-job-icons"
      v-bind:initialCheckboxValue="settings.blurIcons"
      @change="settings.blurIcons = $event"
    />
    <Slider
      label="settings.job-icon-size"
      v-bind:min="1"
      v-bind:max="3"
      v-bind:initial-slider-value="settings.iconSize"
      v-bind:formatter="'{value}'"
      @change="settings.iconSize = $event"
    />
    <ColorPicker
      label="settings.job-icon-color"
      v-bind:initial-color="settings.iconColor"
      @change="settings.iconColor = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Checkbox from "../../Common/Checkbox";
import Slider from "../../Common/Slider";
import ColorPicker from "../../Common/ColorPicker";

export default {
  name: "JobIcons",
  components: { Checkbox, Slider, ColorPicker, SettingButtons },
  data() {
    return {
      settings: {
        jobIcons: this.$store.state.settings.jobIcons,
        blurIcons: this.$store.state.settings.blurIcons,
        iconSize: this.$store.state.settings.iconSize,
        iconColor: this.$store.state.settings.iconColor
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
