const express = require("express");
const router = express.Router();
const db = require("../model/helper");

router.get("/", (req, res) => {
  res.send("Welcome to the movies API");
});

router.get("/movies", async (req, res) => {
  try {
    const results = await db("SELECT * FROM ratings;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/movies", async (req, res) => {
  const { movie_name, image, rating } = req.body;

  try {
    await db(
      `INSERT INTO ratings (movie_name, image, rating) VALUES ('${movie_name}', '${image}', '${rating}');`
    );

    const results = await db("SELECT * FROM ratings;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/movies/:movie_id", async (req, res) => {
  const movieId = req.params.movie_id;

  try {
    await db(`DELETE FROM ratings WHERE id = ${movieId};`);

    const results = await db("SELECT * FROM ratings;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
