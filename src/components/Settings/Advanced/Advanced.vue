<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <v-content>
    <Select
      label="settings.language"
      v-bind:current-item-id="settings.languageId"
      v-bind:items="validValues.languages"
      @change="settings.languageId = $event"
    />
    <Checkbox
      label="settings.always-show-splash"
      v-bind:initialCheckboxValue="settings.alwaysShowSplash"
      @change="settings.alwaysShowSplash = $event"
    />
    <Checkbox
      label="settings.show-github"
      v-bind:initialCheckboxValue="settings.showGithub"
      @change="settings.showGithub = $event"
    />
    <Checkbox
      label="settings.logging"
      v-bind:initialCheckboxValue="settings.logging"
      @change="settings.logging = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
    <Button
      class="reset-all"
      @click="resetAll"
      label="actions.reset-all"
    ></Button>
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import Select from "../../Common/Select";
import Checkbox from "../../Common/Checkbox";
import Button from "../../Common/Button";
import { setLocale } from "../../../lib/locale";

export default {
  name: "Advanced",
  components: { Button, Select, Checkbox, SettingButtons },
  data() {
    return {
      settings: {
        languageId: this.$store.state.settings.languageId,
        backgroundColor: this.$store.state.settings.backgroundColor,
        fontColor: this.$store.state.settings.fontColor,
        alwaysShowSplash: this.$store.state.settings.alwaysShowSplash,
        showGithub: this.$store.state.settings.showGithub,
        logging: this.$store.state.settings.logging
      },
      validValues: {
        languages: this.$store.state.validValues.languages
      }
    };
  },
  methods: {
    resetAll() {
      this.$store.commit("resetAll");
      setLocale(this);
      this.$router.push("/");
    },
    reset() {
      this.$emit("reset", this.settings);
    },
    update() {
      this.$emit("update", this.settings);
    }
  }
};
</script>

<style scoped lang="scss">
.reset-all {
  margin-top: 1.5em;
}
</style>
