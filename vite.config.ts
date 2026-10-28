import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import banner from "vite-plugin-banner";
import { viteStaticCopy as copy } from "vite-plugin-static-copy";
import tailwind from "@tailwindcss/vite";
import tailwindPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import postcss, {
    type Rule as PostCssRule,
    type Plugin as PostCssPlugin,
} from "postcss";

import { fileURLToPath } from "url";
import { resolve } from "path";

import pkg from "./package.json" with { type: "json" };

/**
 * Generate a licence file banner with the given package version.
 * @param version package version
 * @returns file banner string
 */
function generate(version: string): string {
    return `/*! Oruga Tailwind Theme v${version} | MIT License | github.com/oruga-ui/theme-tailwind */`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    if (mode === "development") {
        return {
            plugins: [vue(), tailwind()],
            resolve: {
                alias: {
                    "@": fileURLToPath(new URL("./src", import.meta.url)),
                },
            },
            css: {
                postcss: {
                    plugins: [tailwindPostcss(), autoprefixer()],
                },
            },
        };
    } else {
        return {
            plugins: [
                // build types in dist/types
                dts({
                    tsconfigPath: "./tsconfig.lib.json",
                    outDirs: "./dist/types",
                    entryRoot: "src/plugins",
                    include: ["src/plugins/theme.ts"],
                }),
                // copy assets into dist
                copy({
                    targets: [
                        {
                            src: "src/assets/scss",
                            dest: ".",
                            rename: { stripBase: 2 },
                        },
                    ],
                }),
                // adds a banner to every generated dist file
                banner(generate(pkg.version)),
            ],
            resolve: {
                tsconfigPaths: true,
            },
            build: {
                emptyOutDir: true,
                copyPublicDir: false,
                lib: {
                    entry: resolve(import.meta.dirname, "src/build.ts"),
                    name: "OrugaThemeTailwind",
                    fileName: "theme",
                    cssFileName: "theme",
                },
                rollupOptions: {
                    // make sure to externalize deps that shouldn't be bundled
                    // into your library
                    external: ["vue", /oruga\/.*/],
                    output: {
                        // Provide global variables to use in the UMD build
                        // for externalized deps
                        globals: {
                            vue: "Vue",
                        },
                    },
                },
            },
            css: {
                postcss: {
                    plugins: [
                        tailwindPostcss(),
                        autoprefixer(),
                        postcssShadowDomFixer(),
                    ],
                },
            },
        };
    }
});

// Custom PostCSS plugin for Web Components & Tailwind
const postcssShadowDomFixer = (): PostCssPlugin => {
    return {
        postcssPlugin: "postcss-shadow-dom-fixer",
        // 1. Copy the universal defaults onto :is(:host, :root), without the @supports gate
        Once(root): void {
            const prefix = ":is(:host, :root) ";

            root.walkAtRules("layer", (layer) => {
                if (layer.params.trim() !== "properties") return;

                // Skip if the copy was already added
                let alreadyAdded = false;
                layer.walkRules((rule) => {
                    if (rule.selector.startsWith(prefix)) alreadyAdded = true;
                });
                if (alreadyAdded) return;

                // Collect first, then append, so the walk doesn't visit the new rules
                const copies: PostCssRule[] = [];
                layer.walkRules((rule) => {
                    if (!rule.selectors.includes("*")) return;

                    const copy = postcss.rule({
                        selector: rule.selectors
                            .map((s) => `${prefix}${s}`)
                            .join(", "),
                    });
                    rule.each((node) => {
                        copy.append(node.clone());
                    });
                    copies.push(copy);
                });

                copies.forEach((copy) => layer.append(copy));
            });
        },

        // 2. Extend :root selectors to :root, :host (skip rules already handled)
        Rule(rule): void {
            if (
                rule.selector &&
                rule.selector.includes(":root") &&
                !rule.selector.includes(":host")
            ) {
                rule.selector = rule.selector.replace(/:root/g, ":root, :host");
            }
        },
    };
};

// Marks the function as a PostCSS plugin creator
postcssShadowDomFixer.postcss = true as const;
