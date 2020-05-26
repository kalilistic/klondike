<!--suppress HtmlFormInputWithoutLabel, JSUnresolvedVariable, HtmlUnknownAttribute -->
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
    <Select
      label="settings.digit-sep"
      v-bind:current-item-id="settings.digitSepId"
      v-bind:items="validValues.digitSeps"
      @change="settings.digitSepId = $event"
    />
    <Select
      label="settings.decimal-sep"
      v-bind:current-item-id="settings.decimalSepId"
      v-bind:items="validValues.decimalSeps"
      @change="settings.decimalSepId = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Checkbox from "../../Common/Checkbox";
import Slider from "../../Common/Slider";
import Select from "../../Common/Select";

export default {
  name: "Numbers",
  components: { Checkbox, Select, Slider, SettingButtons },
  data() {
    return {
      settings: {
        abbreviateNumbers: this.$store.state.settings.abbreviateNumbers,
        precision: this.$store.state.settings.precision,
        digitSepId: this.$store.state.settings.digitSepId,
        decimalSepId: this.$store.state.settings.decimalSepId
      },
      validValues: {
        digitSeps: this.$store.state.validValues.digitSeps,
        decimalSeps: this.$store.state.validValues.decimalSeps
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
