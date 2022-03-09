import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import { QuasarConfig } from "@/quasar.config";

import "./quasar.config";

const app = createApp(App);
app.use(Quasar, QuasarConfig);
app.use(createPinia());
app.use(router);

app.mount("#app");
