import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { createOruga, OrugaComponentPlugins } from "@oruga-ui/oruga";
import Examples from "@oruga-ui/examples";

// add examples styles
import "@oruga-ui/examples/index.css";

// add theme
import "./assets/scss/tailwind.scss";

// add theme config
import { config as tailwindConfig } from "./plugins/theme";

const oruga = createOruga(
    {
        iconPack: "fas",
        iconComponent: "vue-fontawesome",
        customIconPacks: {
            fas: {
                sizes: {
                    default: "",
                    small: "sm",
                    medium: "lg",
                    large: "xl",
                },
            },
        },
        ...tailwindConfig,
    },
    // add all components globally
    OrugaComponentPlugins,
);

createApp(App).use(router).use(oruga).use(Examples).mount("#app");
