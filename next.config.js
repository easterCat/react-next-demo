// const fetch = require("isomorphic-unfetch");
// const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withLess = require("@zeit/next-less");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn("HACK: Removing `minimize` option from `css-loader` entries in Webpack config");
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

module.exports = withLess({
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
});

// module.exports = {
//   exportPathMap: async function() {
//     return {
//       "/": { page: "/" },
//       "/about": { page: "/about" },
//       "/post": { page: "/post" },
//       "/page": { page: "/page" }
//     };

//     const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//     const data = await res.json();
//     const shows = data.map(entry => entry.show);

//     shows.forEach(show => {
//       paths[`/show/${show.id}`] = {
//         page: "/show/[id]",
//         query: { id: show.id }
//       };
//     });

//     return paths;
//   }
// };

// module.exports = withBundleAnalyzer({
//   analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
//   analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
//   bundleAnalyzerConfig: {
//     server: {
//       analyzerMode: "static",
//       reportFilename: "../bundles/server.html"
//     },
//     browser: {
//       analyzerMode: "static",
//       reportFilename: "../bundles/client.html"
//     }
//   }
// });
