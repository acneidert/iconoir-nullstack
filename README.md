# Nullstack Feather Icons

## Description

This package allows you to use the [Feather Icons](https://feathericons.com/) in your Nullstack applications. Feather Icons is a set of free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a 2px stroke.

## Usage

1. Install the package

```sh
npm install nullstack-iconoir
# or
yarn add nullstack-iconoir
```

2. Import and use it

```jsx
import { IconArchive } from "nullstack-iconoir";

export default function MyApp() {
  return (
    <IconArchive
      size={36} // set custom `width` and `height`
      color="red" // set `stroke` color
      stroke={3} // set `stroke-width`
    />
  );
}
```

## Available icons

List of available icons: https://iconoir.com/

This version includes **Iconoir Icons v6.11.0**, see [changelog](https://github.com/iconoir-icons/iconoir/releases) to know which icons are available.


## Thanks to [nullstack-feather-icons](https://github.com/fccoelho7/nullstack-feather-icons) where I stole the idea and some codes XD