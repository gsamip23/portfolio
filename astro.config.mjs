import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default {
  // Specify the adapter (e.g., static, node)
  // adapter: Node(),

  // Define your project's routes
  // routes: {
  //   '/': 'src/routes/index.astro',
  //   '/about': 'src/routes/about.astro',
  // },
};