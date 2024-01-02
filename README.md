# Nullstack Iconoir Icons

## Description

This package allows you to use the [Iconoir Icons](https://iconoir.com/) in your Nullstack applications. Iconoir is an open-source library with 1300+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.

## Usage

1. Install the package

```sh
npm install iconoir-nullstack
# or
yarn add iconoir-nullstack
```

2. Import and use it

```jsx
import { IconArchive } from "iconoir-nullstack";

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

This version includes **Iconoir Icons v7.3.0**, see [changelog](https://github.com/iconoir-icons/iconoir/releases) to know which icons are available.


## Thanks 
To [nullstack-feather-icons](https://github.com/fccoelho7/nullstack-feather-icons) where I stole the idea and some codes XD