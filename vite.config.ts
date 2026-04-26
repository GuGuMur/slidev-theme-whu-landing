import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  base: "./",
  publicDir: "public",
  slidev: {
    markdown: {
      /* markdown-it 选项 */
      markdownItSetup(md) {
        /* 自定义 markdown-it 插件 */
        // md.use(MyPlugin);
      },
    },
    /* 其他插件的选项 */
  },
  optimizeDeps: {
    include: [
      "debug",
      "slidev-addon-naive > debug",
      "naive-ui",
      "@vue/runtime-core",
    ],
    exclude: ["virtual:naive"],
  },
  ssr: {
    noExternal: [
      "debug",
      "slidev-addon-naive > debug",
      "naive-ui",
      "@vue/runtime-core",
    ],
  },
  build: {
    rollupOptions: {
      external: ["virtual:naive"],
    },
  },
  plugins: [
    Components({
      /* options */
    }),
  ],
  resolve: {
    alias: {
      // 强制指向 debug 的 dist 版本，通常 dist 版本对 ESM 兼容性更好
      debug: "debug/src/browser.js",
    },
  },
  define: {
    "process.env.DEBUG": "false", // 某些版本的 debug 依赖这个
    "process.type": '"browser"',
  },
});
