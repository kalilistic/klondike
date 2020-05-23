<template>
  <v-content>
    <ColorPicker
      label="settings.background-color"
      v-bind:initial-color="settings.backgroundColor"
      @change="settings.backgroundColor = $event"
    />
    <ColorPicker
      label="settings.font-color"
      v-bind:initial-color="settings.fontColor"
      @change="settings.fontColor = $event"
    />
    <Slider
      label="settings.opacity"
      v-bind:min="50"
      v-bind:max="100"
      v-bind:initial-slider-value="settings.opacity"
      v-bind:formatter="'{value}%'"
      @change="settings.opacity = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import ColorPicker from "../../Common/ColorPicker";
import SettingButtons from "../../Common/SettingButtons";
import Slider from "../../Common/Slider";

export default {
  name: "General",
  components: { ColorPicker, Slider, SettingButtons },
  data() {
    return {
      settings: {
        backgroundColor: this.$store.state.settings.backgroundColor,
        fontColor: this.$store.state.settings.fontColor,
        opacity: this.$store.state.settings.opacity
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
