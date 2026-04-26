import { defineAppSetup } from "@slidev/types";
import referencesPlugin from "../plugins/references/index";
import scrollPlugin from "../plugins/scroll";
import type { DefineComponent, Plugin } from "vue";


import * as naive from "naive-ui";

const plugin = naive.default;

export default defineAppSetup(({ app }) => {
  app.use(referencesPlugin);
  app.use(scrollPlugin);
      Object.entries(naive).forEach(([name, component]) => {
        app.component(name, component as DefineComponent);
      });
});
