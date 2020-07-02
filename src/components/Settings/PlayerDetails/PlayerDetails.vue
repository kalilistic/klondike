<!--suppress HtmlFormInputWithoutLabel, JSUnresolvedVariable, HtmlUnknownAttribute -->
<template>
  <v-content>
    <Select
      label="settings.secondary-stat"
      v-bind:current-item-id="settings.secondaryStat"
      v-bind:items="validValues.additionalStats"
      @change="settings.secondaryStat = $event"
    />
    <Checkbox
      label="settings.limit-break"
      v-bind:initialCheckboxValue="settings.limitBreak"
      @change="settings.limitBreak = $event"
    />
    <Checkbox
      label="settings.include-pets"
      v-bind:initialCheckboxValue="settings.includePets"
      @change="settings.includePets = $event"
    />
    <Checkbox
      label="settings.include-jobless"
      v-bind:initialCheckboxValue="settings.includeJobless"
      @change="settings.includeJobless = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Checkbox from "../../Common/Checkbox";
import Select from "../../Common/Select";

export default {
  name: "PlayerDetails",
  components: { Select, Checkbox, SettingButtons },
  data() {
    return {
      settings: {
        secondaryStat: this.$store.state.settings.secondaryStat,
        limitBreak: this.$store.state.settings.limitBreak,
        includePets: this.$store.state.settings.includePets,
        includeJobless: this.$store.state.settings.includeJobless
      },
      validValues: {
        additionalStats: this.$store.state.validValues.additionalStats
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
