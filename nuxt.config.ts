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
          // https://getbootstrap.com/docs/5.3/getting-started/introduction/
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm",
          crossorigin: "anonymous",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unicons.iconscout.com/release/v4.0.8/css/line.css",
        },
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9",
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
