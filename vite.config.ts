import { defineConfig } from "vite";

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
        include: ["debug", "slidev-addon-naive > debug"],
    },
});
