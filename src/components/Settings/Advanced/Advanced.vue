<template>
  <v-content>
    <Select
      label="settings.language"
      v-bind:current-item-id="settings.languageId"
      v-bind:items="validValues.languages"
      @change="settings.languageId = $event"
    />
    <Checkbox
      label="settings.limit-break"
      v-bind:initialCheckboxValue="settings.limitBreak"
      @change="settings.limitBreak = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Select from "../../Common/Select";
import Checkbox from "../../Common/Checkbox";

export default {
  name: "Advanced",
  components: { Select, Checkbox, SettingButtons },
  data() {
    return {
      settings: {
        languageId: this.$store.state.settings.languageId,
        backgroundColor: this.$store.state.settings.backgroundColor,
        fontColor: this.$store.state.settings.fontColor,
        limitBreak: this.$store.state.settings.limitBreak
      },
      validValues: {
        languages: this.$store.state.validValues.languages
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
