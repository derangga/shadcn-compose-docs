import { createApp } from "vue";
import router from "./router";
import "prismjs/themes/prism.css";
import "./style.css";
import _ from "prismjs";
import App from "./App.vue";
import TabPreview from "./components/ui/markdown-components/TabPreview.vue";
import Steps from "./components/ui/markdown-components/Steps.vue";
import HeaderDocs from "./components/ui/markdown-components/HeaderDocs.vue";
import EditThisPage from "./components/ui/markdown-components/EditThisPage.vue";
import DocsPage from "./components/ui/markdown-components/DocsPage.vue";
import Preview from "./components/ui/markdown-components/Preview.vue";
import CodeWithFilename from "./components/ui/markdown-components/CodeWithFilename.vue";
import CodeConverter from "./components/docs/CodeConverter.vue";
import { createHead } from "@unhead/vue/client";

const app = createApp(App);
const head = createHead({
  init: [
    {
      title: 'Shadcn Compose',
      htmlAttrs: { lang: 'en' }
    }
  ]
});
app.component("TabPreview", TabPreview);
app.component("Steps", Steps);
app.component("HeaderDocs", HeaderDocs);
app.component("EditThisPage", EditThisPage);
app.component("DocsPage", DocsPage);
app.component("Preview", Preview);
app.component("CodeWithFilename", CodeWithFilename);
app.component("CodeConverter", CodeConverter);
app.use(router);
app.use(head)
app.mount("#app");
