const express = require("express");
const next = require("next");
const ip = require("ip");
const dev = process.env.NODE_ENV !== "production"; //判断是否是开发环境
const app = next({ dev });
const handle = app.getRequestHandler();
const compression = require("compression");
const port = parseInt(process.env.PORT, 10) || 6776;
const proxy = require("http-proxy-middleware");
const config = require("../app.config");
const server = express();

app
  .prepare()
  .then(() => {
    middleware();
    router();
    listen();
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

function middleware() {
  // 开启代理
  server.use(
    "/api/*",
    proxy({
      target: config.serverApi,
      pathRewrite: {
        "^/api/": "/api/" // 重写请求，api/解析为/
      },
      changeOrigoin: true
    })
  );

  if (!dev) {
    server.use(compression()); //gzip
  }
}

function router() {
  server.get("/", (req, res) => app.render(req, res, "/home"));
  server.get("/home", (req, res) => app.render(req, res, "/home"));
  server.get("/user", (req, res) => app.render(req, res, "/user"));
  server.get("/books", (req, res) => app.render(req, res, "/books"));
  server.get("/articles", (req, res) => app.render(req, res, "/articles"));
  server.get("/login", (req, res) => app.render(req, res, "/login"));
  server.get("/markdown", (req, res) => app.render(req, res, "/markdown"));
  server.get("/books", (req, res) => app.render(req, res, "/books"));
  server.get("/write", (req, res) => app.render(req, res, "/write"));
  server.get("/logged", (req, res) => app.render(req, res, "/logged"));
  server.get("/book/:currentBookId", (req, res) =>
    app.render(req, res, "/book/[currentBookId]", {
      currentBookId: req.params.currentBookId
    })
  );
  server.get("/article/:curArticleId", (req, res) =>
    app.render(req, res, "/article/[curArticleId]", {
      curArticleId: req.params.curArticleId
    })
  );
  server.all("*", (req, res) => handle(req, res));
}

function listen() {
  server.listen(port, err => {
    if (err) throw err;
    else
      console.log(
        `http start at ===> \n  http://localhost:${port} \n http://${ip.address()}:${port}`
      );
  });
}
