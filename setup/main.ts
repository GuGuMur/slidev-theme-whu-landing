import { defineAppSetup } from "@slidev/types";
import referencesPlugin from "../plugins/references/index";
import scrollPlugin from "../plugins/scroll";
import tabPlugin from "../plugins/tab";
import type { DefineComponent } from "vue";
import { createPinia } from 'pinia'
import * as naive from "naive-ui";

export default defineAppSetup(({ app }) => {
  app.use(createPinia())
  app.use(referencesPlugin);
  app.use(scrollPlugin);
  app.use(tabPlugin);
  Object.entries(naive).forEach(([name, component]) => {
    app.component(name, component as DefineComponent);
  });
});
