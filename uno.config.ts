import { defineConfig } from "unocss";
// import { presetShades } from "@viarotel-org/unocss-preset-shades";

export default defineConfig({
    // presets: [
    //     presetShades({
    //         primary: "#3b99d4",
    //     }),
    // ],
    shortcuts: {
        // 自定义默认背景
        "bg-primary": "bg-[#3b99d4]",
        "page-number": "italic font-bold text-base font-[Times_New_Roman,serif] [font-variant-numeric:lining-nums] tracking-wide",
    },
    theme: {
        colors: {
            // main: "",
        },
    },
    // ...
});
