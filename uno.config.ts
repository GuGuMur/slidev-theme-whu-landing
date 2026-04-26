import { defineConfig, presetIcons, presetWind3 } from "unocss";
// import { presetShades } from "@viarotel-org/unocss-preset-shades";

export default defineConfig({
  // presets: [
  //     presetShades({
  //         primary: "#3b99d4",
  //     }),
  // ],
  presets: [
    presetWind3(),
    presetIcons({
      /* 选项 */
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  shortcuts: [
    {
      // 自定义默认背景
      "bg-primary": "bg-[#3b99d4]",
      "page-number":
        "italic font-bold text-base font-[Times_New_Roman,serif] [font-variant-numeric:lining-nums] tracking-wide",
      "flex-center": "flex items-center justify-center",
    },
    [
      /^d-mark-(.*)$/,
      ([, c]) =>
        `relative z-1 inline font-bold bg-gradient-to-b from-transparent from-35% via-${c} via-35% via-${c} via-80% to-transparent to-80%`,
    ],
  ],
  theme: {
    colors: {
      // 核心校色
      primary: "#3b99d4", // 珞珈蓝
      secondary: "#115740", // 珞珈绿

      // 扩展学术色谱
      whu: {
        blue: "#002554", // 珞珈蓝
        green: "#115740", // 珞珈绿
        pink: "#f8a3bc", // 珞樱粉
        sky: "#41b6e6", // 东湖蓝
        yellow: "#ffa300", // 秋桂黄
        purple: "#33058d", // 春藤紫
        cyan: "#00797c", // 甍瓦绿
        red: "#e10800", // 霜叶红
        grey: "#c1c6c8", // 晨雾灰
      },
    },
  },
  // ...
});
