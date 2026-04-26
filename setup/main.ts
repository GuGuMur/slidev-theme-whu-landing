import { defineAppSetup } from "@slidev/types";
import referencesPlugin from "../plugins/references/index";
import scrollPlugin from "../plugins/scroll";
import naive from "slidev-addon-naive";

export default defineAppSetup(({ app }) => {
  app.use(referencesPlugin);
  app.use(scrollPlugin);
});
