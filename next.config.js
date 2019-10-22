const fetch = require("isomorphic-unfetch");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withLess = require("@zeit/next-less");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === "css-loader" && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withBundleAnalyzer(
  withLess({
    poweredByHeader: false,
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: "static",
        reportFilename: "../bundles/server.html"
      },
      browser: {
        analyzerMode: "static",
        reportFilename: "../bundles/client.html"
      }
    },
    exportPathMap: async function() {
      const paths = {
        "/": { page: "/" },
        "/books": { page: "/books" },
        "/article": { page: "/article" },
        "/write": { page: "/write" }
      };

      const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
      const data = await res.json();
      const shows = data.map(entry => entry.show);

      shows.forEach(show => {
        paths[`/book/${show.id}`] = {
          page: "/book/[id]",
          query: { id: show.id }
        };
      });

      return paths;
    },
    lessLoaderOptions: {
      javascriptEnabled: true
    },
    webpack(config) {
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
        })
      );
      HACK_removeMinimizeOptionFromCssLoaders(config);
      return config;
    }
  })
);
