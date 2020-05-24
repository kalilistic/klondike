import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import routes from "./routes/routes";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname + "/klondike/",
  routes
});

// disable NavigationDuplicated (https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

// noinspection JSUnusedGlobalSymbols
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
