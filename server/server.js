const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/", (req, res) => app.render(req, res, "/home"));
    server.get("/home", (req, res) => app.render(req, res, "/home"));
    server.get("/books", (req, res) => app.render(req, res, "/books"));
    server.get("/article", (req, res) => app.render(req, res, "/article"));
    server.get("/login", (req, res) => app.render(req, res, "/login"));
    server.get("/markdown", (req, res) => app.render(req, res, "/markdown"));
    server.get("/books", (req, res) => app.render(req, res, "/books"));
    server.get("/write", (req, res) => app.render(req, res, "/write"));
    server.get("/book/:currentBookId", (req, res) =>
      app.render(req, res, "/book/[currentBookId]", { currentBookId: req.params.currentBookId })
    );
    server.all("*", (req, res) => handle(req, res));

    server.listen(6776, err => {
      if (err) throw err;
      else console.log("> Ready on http://localhost:6776");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
