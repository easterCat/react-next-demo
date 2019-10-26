const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();
const compression = require("compression"); //压缩插件

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/b/:currentBookId", (req, res) => {
      const actualPage = "/book/[currentBookId]";
      const queryParams = { currentBookId: req.params.currentBookId };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/article", (req, res) => {
      app.render(req, res, "/article");
    });

    server.all("*", (req, res) => handle(req, res));

    server.listen(6776, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:6776");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
