<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <div>
    <v-row class="row">
      <v-col class="column">
        <Label :label="label" />
      </v-col>
    </v-row>
    <v-row class="row">
      <v-col class="column">
        <vue-slider
          v-model="sliderValue"
          :tooltip-formatter="formatter"
          :tooltipStyle="tooltip"
          :tooltip-placement="'bottom'"
          :processStyle="processStyle"
          :dragOnClick="true"
          :min="min"
          :max="max"
          @change="selectValue"
        ></vue-slider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Label from "./Label";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  name: "Slider",
  components: { Label, VueSlider },
  props: {
    label: String,
    initialSliderValue: Number,
    min: Number,
    max: Number,
    formatter: String
  },
  data() {
    return {
      sliderValue: this.initialSliderValue,
      tooltip: {
        backgroundColor: this.$store.state.settings.percentBarColor,
        color: this.$store.state.settings.fontColor
      },
      processStyle: {
        backgroundColor: this.$store.state.settings.percentBarColor
      }
    };
  },
  methods: {
    selectValue() {
      this.$emit("change", this.sliderValue);
    }
  }
};
</script>

<style scoped lang="scss">
.vue-slider {
  width: 21.5ch !important;
  margin-bottom: 0.5em;
}
</style>
