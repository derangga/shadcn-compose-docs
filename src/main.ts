import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";

import "prismjs/themes/prism.css";
import TabPreview from "./components/ui/markdown-components/TabPreview.vue";
import Steps from "./components/ui/markdown-components/Steps.vue";
import ComponentPreview from "./components/ui/markdown-components/ComponentPreview.vue";
import HeaderDocs from "./components/ui/markdown-components/HeaderDocs.vue";
import EditThisPage from "./components/ui/markdown-components/EditThisPage.vue";

const app = createApp(App);
app.component("TabPreview", TabPreview);
app.component("Steps", Steps);
app.component("ComponentPreview", ComponentPreview);
app.component("HeaderDocs", HeaderDocs);
app.component("EditThisPage", EditThisPage);
app.use(router);
app.mount("#app");
