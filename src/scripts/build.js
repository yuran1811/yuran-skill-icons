import fs from "node:fs";
import path from "node:path";

const ICONS_PATH = "./public/icons";

const icons = {};
const iconsDir = fs.readdirSync(ICONS_PATH);

for (const icon of iconsDir) {
  if (icon.endsWith(".json")) continue;

  const iconPath = path.join(ICONS_PATH, icon);
  const name = icon.replace(".svg", "").toLowerCase();

  fs.renameSync(iconPath, `${ICONS_PATH}/${name}.svg`);
  icons[name] = String(fs.readFileSync(`${ICONS_PATH}/${icon}`));
}

fs.writeFileSync(`${ICONS_PATH}/icons.json`, JSON.stringify(icons), {
  flag: "w",
});
