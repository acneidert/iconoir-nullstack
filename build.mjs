#!/usr/bin/env node

// const fs = require("fs-extra");
// const path = require("path");
// const { pascalCase } = require("pascal-case");
// const { transform } = require("@svgr/core");

import fs from "fs-extra"
import path from 'path'
import { pascalCase } from "pascal-case"
import { transform } from "@svgr/core";

const PATH_SOLID = path.resolve("node_modules/iconoir/icons/solid");
const PATH_REGULAR = path.resolve("node_modules/iconoir/icons/regular");

const typingTemplate = `
import { NullstackFunctionalComponent } from "nullstack";

export type IconoirIconProps = {
  width?: number;
  height?: number;
  class?: string;
}

export type IconoirIconComponent = NullstackFunctionalComponent<IconoirIconProps>;
`.trim();

fs.readdir(PATH_SOLID, (err, items) => {
  const index = [];
  const typings = [];
  items
    .filter((name) => name.endsWith(".svg"))
    .forEach((name, pos) => {
      process.stdout.write(
        `Building ${pos}/${items.length}: ` + name.padEnd(42) + "\r"
      );

      const svgCode = fs
        .readFileSync(`${PATH_SOLID}/${name}`, "utf-8")
        .replace(/\n/gm, " ");
      const componentName =
        `IconSolid${pascalCase(name.replace(".svg", "")).replace(/_(\d)/g, "$1")}`;
      // create and transform component
      const component = transform
        .sync(
          svgCode,
          {
            plugins: [
              "@svgr/plugin-svgo",
              "@svgr/plugin-jsx",
              "@svgr/plugin-prettier",
            ],
            icon: true,
            jsxRuntime: "automatic",
          },
          {
            componentName: componentName,
          }
        )
        .replace(/className=/g, "class=");

      // write icon component
      const filePath = path.resolve(`dist/solid/${componentName}.jsx`);

      fs.ensureDirSync(path.dirname(filePath));
      fs.writeFileSync(filePath, component, "utf-8");

      index.push(
        `export { default as ${componentName} } from './solid/${componentName}';`
      );
      typings.push(`export const ${componentName}: IconoirIconComponent;`);
    });

  index.push("");
  typings.push("");

  fs.writeFileSync("./dist/index.js", index.join("\n"), "utf-8");
  fs.writeFileSync(
    "./dist/index.d.ts",
    typingTemplate + "\n\n" + typings.join("\n"),
    "utf-8"
  );
});

fs.readdir(PATH_REGULAR, (err, items) => {
  const index = [];
  const typings = [];
  items
    .filter((name) => name.endsWith(".svg"))
    .forEach((name, pos) => {
      process.stdout.write(
        `Building ${pos}/${items.length}: ` + name.padEnd(42) + "\r"
      );

      const svgCode = fs
        .readFileSync(`${PATH_REGULAR}/${name}`, "utf-8")
        .replace(/\n/gm, " ");
      const componentName =
        `Icon${pascalCase(name.replace(".svg", "")).replace(/_(\d)/g, "$1")}`;
      // create and transform component
      const component = transform
        .sync(
          svgCode,
          {
            plugins: [
              "@svgr/plugin-svgo",
              "@svgr/plugin-jsx",
              "@svgr/plugin-prettier",
            ],
            icon: true,
            jsxRuntime: "automatic",
          },
          {
            componentName: componentName,
          }
        )
        .replace(/className=/g, "class=");

      // write icon component
      const filePath = path.resolve(`dist/${componentName}.jsx`);

      fs.ensureDirSync(path.dirname(filePath));
      fs.writeFileSync(filePath, component, "utf-8");

      index.push(
        `export { default as ${componentName} } from './${componentName}';`
      );
      typings.push(`export const ${componentName}: IconoirIconComponent;`);
    });

  index.push("");
  typings.push("");

  fs.appendFile("./dist/index.js", index.join("\n"), "utf-8");
  fs.appendFile(
    "./dist/index.d.ts",
    "\n/*REGULAR*/\n" + typings.join("\n"),
    "utf-8"
  );
});