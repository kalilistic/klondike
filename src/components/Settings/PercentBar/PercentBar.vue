<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <v-content>
    <Checkbox
      label="settings.percent-bar"
      v-bind:initialCheckboxValue="settings.percentBar"
      @change="settings.percentBar = $event"
    />
    <Select
      label="settings.percent-bar-mode"
      v-bind:current-item-id="settings.percentBarMode"
      v-bind:items="validValues.percentBarModes"
      @change="settings.percentBarMode = $event"
    />
    <ColorPicker
      label="settings.percent-bar-color"
      v-bind:initial-color="settings.percentBarColor"
      @change="settings.percentBarColor = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Checkbox from "../../Common/Checkbox";
import ColorPicker from "../../Common/ColorPicker";
import Select from "../../Common/Select";

export default {
  name: "PercentBar",
  components: { Checkbox, Select, ColorPicker, SettingButtons },
  data() {
    return {
      settings: {
        percentBar: this.$store.state.settings.percentBar,
        percentBarMode: this.$store.state.settings.percentBarMode,
        percentBarColor: this.$store.state.settings.percentBarColor
      },
      validValues: {
        percentBarModes: this.$store.state.validValues.percentBarModes
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
