<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <v-content>
    <Checkbox
      label="settings.percent-bar-role"
      v-bind:initialCheckboxValue="settings.percentBarRole"
      @change="settings.percentBarRole = $event"
    />
    <ColorPicker
      label="settings.percent-bar-color-tank"
      v-bind:initial-color="settings.percentBarColorTank"
      @change="settings.percentBarColorTank = $event"
    />
    <ColorPicker
      label="settings.percent-bar-color-heal"
      v-bind:initial-color="settings.percentBarColorHeal"
      @change="settings.percentBarColorHeal = $event"
    />
    <ColorPicker
      label="settings.percent-bar-color-dps"
      v-bind:initial-color="settings.percentBarColorDps"
      @change="settings.percentBarColorDps = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Checkbox from "../../Common/Checkbox";
import ColorPicker from "../../Common/ColorPicker";

export default {
  name: "PercentBarRole",
  components: { Checkbox, ColorPicker, SettingButtons },
  data() {
    return {
      settings: {
        percentBarRole: this.$store.state.settings.percentBarRole,
        percentBarColorTank: this.$store.state.settings.percentBarColorTank,
        percentBarColorHeal: this.$store.state.settings.percentBarColorHeal,
        percentBarColorDps: this.$store.state.settings.percentBarColorDps
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
