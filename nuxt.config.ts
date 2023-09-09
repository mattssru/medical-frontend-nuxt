// https://nuxt.com/docs/api/configuration/nuxt-config
const { fileURLToPath } = require("url");
export default defineNuxtConfig({
  css: [
    '~/assets/css/styles.css',
  ],

  components: ["~/components/**"],
  plugins: [
    { 
      src: '~/plugins/jquery.js', mode: 'client',
    },
  ],
  dir: {
    assets: "~/assets/**",
  },
  app: {
    head: {
      title: "Medical",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://unicons.iconscout.com/release/v4.0.8/css/line.css",
        },
        // {
        //   rel: "icon",
        //   type: "image/x-icon",
        //   href: "/favicon.png",
        // },
      ],
      
    },
  },
  devtools: { enabled: true },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
      imgUrl: { esModule: true, limit: 1000 },
    },
  },
});
