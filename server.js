const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));


app.get("/recipes/:ingredient", function (req, res) {
  const ingredient = req.params.ingredient;
  axios
    .get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`)
    .then((result) => {
      const recipes = filteRcipesr(result.data.results);
      res.send(recipes);
    })
    .catch((error) => {
      res.send(error);
    });
});

function filteRcipesr(recipes) {
  return recipes.map((recipe) => ({
    ingredients: recipe.ingredients,
    title: recipe.title,
    thumbnail: recipe.thumbnail,
    href: recipe.href
  }));
}

app.listen(port, function () {
  console.log(`server running on ${port}`);
});
