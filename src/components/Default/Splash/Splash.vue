<template>
  <div class="splash-container">
    <div class="splash-title">{{ title }}</div>
    <div :key="msg" v-for="msg in messages" class="splash-message">
      {{ msg }}
    </div>
  </div>
</template>

<script>
import SplashMessage from "../../../constants/Splash";

export default {
  name: "Splash",
  data() {
    return {
      version: SplashMessage.version,
      title: SplashMessage.title,
      messages: SplashMessage.messages
    };
  }
};
</script>

<style scoped lang="scss">
.splash-container {
  white-space: initial;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
.splash-title {
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  filter: sepia(100%);
}
.splash-message {
  font-size: 1rem;
}
</style>
