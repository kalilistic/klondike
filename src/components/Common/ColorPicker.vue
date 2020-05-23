<template>
  <div>
    <v-row class="row">
      <v-col class="column">
        <Label :label="label" />
      </v-col>
    </v-row>
    <v-row class="row">
      <v-col class="column">
        <v-color-picker
          v-model="color"
          value="colors.background"
          class="color-picker"
          :style="colorPickerStyle"
          hide-inputs
          canvas-height="20"
          width="160"
          mode="hexa"
          @input="updateColor"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Label from "./Label";

export default {
  name: "ColorPicker",
  components: { Label },
  props: {
    label: String,
    initialColor: String
  },
  data() {
    return {
      color: {}
    };
  },
  computed: {
    colorPickerStyle() {
      return {
        color: this.$store.state.settings.fontColor,
        backgroundColor: this.$store.state.settings._foregroundColor
      };
    }
  },
  methods: {
    updateColor() {
      this.$emit("change", this.color);
    }
  },
  beforeMount() {
    this.color = this.initialColor;
  }
};
</script>

<style scoped lang="scss">
.color-picker {
  border: 0.1em solid;
  margin-bottom: 0.5em;
}
</style>
<!--suppress CssUnusedSymbol, CssUnusedSymbol -->
<style scoped>
div >>> .v-color-picker__controls {
  padding: 0.25em 0.5em 0.4em 0.5em;
}
</style>
