const express = require("express");
const moviesRouter = require("./src/api/movies/movies.routes");

const server = express();
const PORT = 3000;

server.use("/movies", moviesRouter);

server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
