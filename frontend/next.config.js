module.exports = {
  webpackDevMiddleware: (config) => {
    config.node = {
      fs: "empty",
    };

    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
  },
};
