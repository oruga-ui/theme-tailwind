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



<!-- Customization code goes here -->



## Contributors
Thank you to everyone involved for improving this project, day by day 💚

<!-- <a href="https://github.com/oruga-ui/theme-tailwind">
  <img
  src="https://contrib.rocks/image?repo=oruga-ui/theme-tailwind"
  />
</a> -->

[Complete list](CONTRIBUTORS.md).

## Credits

Logo designed by [mouadTaoussi](https://github.com/mouadTaoussi)

## License

Code released under [MIT](https://github.com/oruga-ui/theme-tailwind/blob/master/LICENSE) license.
