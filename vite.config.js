import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { adorableCSS } from "adorable-css/vite"
import path from "path";

export default defineConfig({
  base: "/svelte-vite-app/",
  plugins: [adorableCSS(), svelte()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname,"./src"),
    }
  },
})