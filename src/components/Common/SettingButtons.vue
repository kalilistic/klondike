<template>
  <v-row class="no-spacing">
    <v-col class="no-spacing">
      <Button @click="reset" label="actions.reset" />
      <Button @click="update" label="actions.save" />
    </v-col>
  </v-row>
</template>

<script>
import Button from "./Button";
export default {
  name: "SettingButtons",
  components: { Button },
  methods: {
    reset() {
      this.$emit("reset");
    },
    update() {
      this.$emit("update");
    }
  }
};
</script>
