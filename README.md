<p align="center">
    <img width="440" src="public/oruga-tailwind-full.png" />
</p>

<p align="center">
  <i><a href="https://tailwindcss.com/" target="_blank">Tailwind</a> theme for <a href="https://oruga-ui.com" target="_blank">Oruga</a></i>
</p>

<p align="center">
    <!-- <a href="https://www.npmjs.com/package/@oruga-ui/theme-tailwind"><img src="https://img.shields.io/npm/v/@oruga-ui/theme-bulma.svg?logo=npm" /><a> -->
    <!-- <a href="https://www.npmjs.com/package/@oruga-ui/theme-tailwind"><img src="https://img.shields.io/npm/dt/@oruga-ui/theme-bulma.svg" /></a> -->
    <a href="https://discord.gg/RuKuBYN"><img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord" /></a>
    <a href="https://ko-fi.com/mlmoravek"><img src="https://img.shields.io/badge/ko--fi-donate-%23FF5E5B?style=flat&logo=ko-fi&logoColor=white" /></a>
</p>

### Install

```sh
npm install @oruga-ui/theme-tailwind
```

or

```sh
yarn add @oruga-ui/theme-tailwind
```

### Configure

```js
import { createApp } from 'vue'
import App from './App.vue'

import Oruga from '@oruga-ui/oruga-next'
import { tailwindConfig } from '@oruga-ui/theme-tailwind'

import '@oruga-ui/theme-tailwind/dist/tailwind.css'

createApp(App)
    .use(Oruga, tailwindConfig)
    .mount('#app')
```

Please note, this package can be used without importing any other Oruga styling or theme.


### Customization (SASS/SCSS)
<!-- 
Tailwind is a highly customizable CSS framework. From colors to typography, spacing and sizes, forms and layouts, all parts of Tailwind can be customized by the user (see [Tailwind Customization](https://tailwindcss.com/docs/adding-custom-styles)).

Using the following sample code you **don't need** `import '@oruga-ui/theme-tailwind/dist/tailwind.css'` but you have to add a custom sass/scss file to customize Tailwind and the theme variables. 
To overwrite Tailwind Sass variables with your own values, you have to use `@use` and the `with` keyword, which takes a Sass map.
You have two options for including the theme: include all the styling at once (including full tailwind), or include the Oruga theme and Tailwind separately. -->

```scss
// Option A: Include all styling (including tailwind)

// set your color overrides
// $primary: #8c67ef;
// $link: $primary;

// add new colors to the colors map
// $twitter: #4099FF;
// $custom-colors: ('twitter': $twitter);

// Include the Oruga Tailwind theme with Tailwind included (you can only manipulate any derived variables here)
// @use '@oruga-ui/theme-tailwind/dist/scss/tailwind-build' with (
//     $family-primary: '"Nunito", sans-serif',
//     $primary: $primary,
//     $link: $link,
//     $custom-colors: $custom-colors,
// );

// Then add additional custom code here
// ...
```
**_NOTE:_** Note that only variables within Taiwlnd's [derived-variables.scss]() file can be overridden here.

```scss
// Option B: Include the Oruga theme and Tailwind separately

// set your color overrides
// $primary: #8c67ef;
// $link: $primary;

// add new colors to the colors map
// $twitter: #4099FF;
// $custom-colors: ('twitter': $twitter);

// 1. Include the Oruga theme first (you can only manipulate any derived variables here)
// @use '@oruga-ui/theme-tailwind/dist/scss/tailwind' with (
//     $family-primary: '"Nunito", sans-serif',
//     $primary: $primary,
//     $link: $link,
//     $custom-colors: $custom-colors,
// );

// 2. Include any other Tailwind module with specific configuration here
// @use "tailwind/sass/elements" with (
//     $button-weight: 800
// );

// 3. Include the remaining parts or full Tailwind
// @use "tailwind/sass";

// Then add additional custom code here
// ...
```

### Override default config

<!-- In case you want to replace the default style of a component you can override or add new classes changing ``tailwindConfig``; more details about components customization on https://oruga-ui.com/documentation/customisation.html

```js
import { createApp } from 'vue'

import Oruga from '@oruga-ui/oruga-next'
import { tailwindConfig } from '@oruga-ui/theme-tailwind'

import '@oruga-ui/theme-tailwind/dist/tailwind.css'

const customTailwindConfig = {
    ...TailwindConfig,
    checkbox: {
        override: true,
        rootClass: 'checkbox'
    }
}

createApp(App)
    .use(Oruga, customTailwindConfig)
    .mount('#app')
``` -->


## Contributors
Thank you to everyone involved for improving this project, day by day 💚

<!-- <a href="https://github.com/oruga-ui/theme-tailwind">
  <img
  src="https://contrib.rocks/image?repo=oruga-ui/theme-bulma"
  />
</a> -->

[Complete list](CONTRIBUTORS.md).

## Credits

Logo designed by [mouadTaoussi](https://github.com/mouadTaoussi)

## License

Code released under [MIT](https://github.com/oruga-ui/theme-tailwind/blob/master/LICENSE) license.
