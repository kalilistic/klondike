<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <v-row fluid class="row">
    <Label class="label" :label="label" />
    <input
      class="checkbox"
      type="checkbox"
      v-model="checkboxValue"
      @change="selectCheckbox"
    />
  </v-row>
</template>

<script>
import Label from "./Label";

export default {
  name: "Checkbox",
  props: {
    label: String,
    initialCheckboxValue: Boolean
  },
  components: { Label },
  data() {
    return {
      checkboxValue: this.initialCheckboxValue
    };
  },
  methods: {
    selectCheckbox() {
      this.$emit("change", this.checkboxValue);
    }
  }
};
</script>

<style scoped lang="scss">
.label {
  min-width: 136px;
}
.checkbox {
  margin: 0.25em 0 0.5em 1em;
}
</style>
