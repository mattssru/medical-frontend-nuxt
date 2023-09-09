// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/styles.css"],
  components: true,
  dir: {
    assets: "~/assets/css",
  },
  app: {
    head: {
      title: "Medical",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
          integrity:
            "sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p",
          crossorigin: "anonymous",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
          integrity:
            "sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF",
          crossorigin: "anonymous",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unicons.iconscout.com/release/v4.0.8/css/line.css",
        },
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  devtools: { enabled: true },
  webpack: {
    loaders: {
      imgUrl: { esModule: true, limit: 1000 },
    },
  },
});
