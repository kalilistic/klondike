<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <v-content>
    <Checkbox
      label="settings.percent-bar-you"
      v-bind:initialCheckboxValue="settings.percentBarYou"
      @change="settings.percentBarYou = $event"
    />
    <ColorPicker
      label="settings.percent-bar-color-you"
      v-bind:initial-color="settings.percentBarColorYou"
      @change="settings.percentBarColorYou = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Checkbox from "../../Common/Checkbox";
import ColorPicker from "../../Common/ColorPicker";

export default {
  name: "PercentBarYou",
  components: { Checkbox, ColorPicker, SettingButtons },
  data() {
    return {
      settings: {
        percentBarYou: this.$store.state.settings.percentBarYou,
        percentBarColorYou: this.$store.state.settings.percentBarColorYou
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
