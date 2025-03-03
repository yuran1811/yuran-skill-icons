import { server$ } from "@builder.io/qwik-city";

import { SCALE, shortNames } from "~/constants";

export const parseShortNames = server$(
  (
    { iconNameList, themedIcons }: Record<string, string[]>,
    names: string[],
    theme = "dark",
  ) =>
    names.map((name) => {
      const suffix = themedIcons.includes(
        name in shortNames ? shortNames[name] : name,
      )
        ? `-${theme}`
        : "";

      if (iconNameList.includes(name)) return name + suffix;
      if (name in shortNames) return shortNames[name] + suffix;
    }),
);

export const generateSvg = server$(
  (
    icons: Record<string, string>,
    iconNames: string[],
    {
      perLine,
      gap,
      padding,
      paddingX,
      paddingY,
    }: {
      perLine: number;
      gap: number;
      padding: number;
      paddingX: number;
      paddingY: number;
    },
  ) => {
    const iconSvgList = iconNames.map((i) => ({
      svg: icons[i],
      name: i.replace(/-(light|dark)/gi, ""),
    }));

    const gapSize = 300 + gap;
    const totalPaddingY = (padding ? padding : paddingY) * 2;
    const totalPaddingX = (padding ? padding : paddingX) * 2;
    const length =
      Math.min(perLine * gapSize, iconNames.length * gapSize) -
      44 +
      totalPaddingX;
    const height =
      Math.ceil(iconSvgList.length / perLine) * gapSize - 44 + totalPaddingY;
    const scaledHeight = height * SCALE;
    const scaledWidth = length * SCALE;

    return `<svg width="${scaledWidth}" height="${scaledHeight}" viewBox="0 0 ${length} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      ${iconSvgList
        .map(({ svg }, index) => {
          const pos = {
            x: totalPaddingX / 2 + (index % perLine) * gapSize,
            y: totalPaddingY / 2 + Math.floor(index / perLine) * gapSize,
          };

          return `<g transform="translate(${pos.x}, ${pos.y})">${svg}</g>`;
        })
        .join(" ")}
    </svg>`;
  },
);
