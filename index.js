const express = require("express");
const next = require("next");
const showRoute = require("./server/routes/index");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./src" });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use("/api", showRoute);

    server.get("*", (req, res) => handle(req, res));

    server.listen(PORT, err => {
      if (err) throw err;
      console.log("> Ready on porat", PORT);
    });
  })
  .catch(ex => {
    console.log(ex);
    process.exit(1);
  });
