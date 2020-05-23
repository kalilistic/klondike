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
        <div class="select">
          <input
            class="select-input"
            :style="selectStyle"
            @focus="showItems()"
            @blur="hideItems()"
            :value="selectedItem.name"
          />
          <div class="select-content" v-show="displayItems">
            <div
              class="select-item"
              :style="selectStyle"
              @mousedown="selectItem(item)"
              v-for="(item, index) in items"
              :key="index"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Label from "./Label";

export default {
  name: "Select",
  components: { Label },
  props: {
    label: String,
    items: Array,
    currentItemId: Number
  },
  data() {
    return {
      selectedItem: this.items[this.currentItemId],
      displayItems: false
    };
  },
  computed: {
    selectStyle() {
      return {
        color: this.$store.state.settings.fontColor,
        backgroundColor: this.$store.state.settings._foregroundColor
      };
    }
  },
  methods: {
    showItems() {
      this.displayItems = true;
    },
    hideItems() {
      this.displayItems = false;
    },
    selectItem(item) {
      this.selectedItem = item;
      this.displayItems = false;
      this.$emit("change", this.selectedItem.id);
    }
  }
};
</script>

<style scoped lang="scss">
.select {
  position: relative;
  display: block;
  margin: 0.1em auto 0.5em;
  .select-input {
    @extend .default-border;
    outline: none;
    cursor: pointer;
    display: block;
    font-size: 0.9rem;
    padding: 0.375em;
    min-width: 160px;
    max-width: 160px;
  }
  .select-content {
    @extend .default-border;
    border-top: 0;
    position: absolute;
    min-width: 160px;
    max-width: 160px;
    max-height: 200px;
    overflow: auto;
    z-index: 1;
    .select-item {
      font-size: 0.9rem;
      line-height: 1em;
      padding: 0.6em;
      text-decoration: none;
      display: block;
      cursor: pointer;
    }
  }
  .select:hover .select-content {
    display: block;
  }
}
</style>
