import { Cookies, Notify } from "quasar";

import "./styles/quasar.scss";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

Notify.setDefaults({
  position: "top-right",
  progress: true,
  multiLine: true
});

export const QuasarConfig = {
  config: {},
  plugins: {
    Cookies,
    Notify,
  },
};