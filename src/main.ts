import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import TabPreview from "./components/TabPreview.vue";
import Steps from "./components/Steps.vue";
import ComponentPreview from "./components/ComponentPreview.vue";
import HeaderDocs from "./components/HeaderDocs.vue";

import "prismjs/themes/prism.css";

const app = createApp(App);
app.component("TabPreview", TabPreview);
app.component("Steps", Steps);
app.component("ComponentPreview", ComponentPreview);
app.component("HeaderDocs", HeaderDocs);
app.use(router);
app.mount("#app");
