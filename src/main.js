import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router/index.js";
import { createPinia } from 'pinia';
import components from "@/components/index.js";

const app = createApp(App);
const pinia = createPinia();

// router
app.use(router);
// store
app.use(pinia);
// components
components.forEach(componentInApp => {
    app.component(componentInApp.name, componentInApp);
});
// mount
app.mount('#app')
