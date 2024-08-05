import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https:///IvoRum",
  base: "/volts-documentation",
  integrations: [
    starlight({
      title: "100 Volts documentation",
      logo: {
        src: "./src/assets/ion-logo.svg",
      },
      social: {
        github: "https://github.com/100volts",
      },
      sidebar: [
        {
          label: "[home] Home",
          link: "/",
        },
        {
          label: "[list] Features",
          link: "/features/",
        },
        {
          label: "[plug] Endpoints",
          autogenerate: {
            directory: "endpoints",
          },
        },
      ],
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        Sidebar: "./src/components/Sidebar.astro",
        Pagination: "./src/components/Pagination.astro",
        Hero: "./src/components/Hero.astro",
      },
      customCss: [
        "@fontsource-variable/space-grotesk/index.css",
        "@fontsource/space-mono/400.css",
        "@fontsource/space-mono/700.css",
        "./src/styles/theme.css",
      ],
      expressiveCode: {
        themes: ["github-dark"],
      },
      pagination: false,
      lastUpdated: true,
    }),
  ],
  output: "static",
});
