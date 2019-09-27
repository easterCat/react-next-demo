const fetch = require("isomorphic-unfetch");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

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

module.exports = withBundleAnalyzer({
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
  }
});
