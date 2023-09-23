import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: "https://samipghimire.com.np/",
    integrations: [
        sitemap(),
        robotsTxt({
            sitemap: [
                "https://samipghimire.com.np/sitemap-index.xml",
                "https://samipghimire.com.np/sitemap-0.xml",
            ],
        }),
        solidJs(),
        UnoCSS({ injectReset: true }),
    ],
});
