const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  crossOrigin: "anonymous",
});
