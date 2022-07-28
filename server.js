const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const port = 8080;
let recipes = [];
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/sanity", function (req, res) {
  res.send("ok");
});
let ingredient 
app.get("/recipes/:ingredient", function (req, res) {
   ingredient = req.params.ingredient;

   let result = []
    result = recipes.map(p=>{ return { ingredients: p.ingredients, title: p.title , thumbnail: p.thumbnail, href: p.href } })
    res.send(result)
  
});

axios
    .get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`)
    .then((res) => {
      for (let i = 0; i < res["data"]["results"].length; i++) 
        recipes.push(res["data"]["results"][i])
        // recipes.push({
        //   ingredients: res["data"]["results"][i]["ingredients"],
        //   title: res["data"]["results"][i]["title"],
        //   thumbnail: res["data"]["results"][i]["thumbnail"],
        //   href: res["data"]["results"][i]["href"],
        // // });
      
    });

app.listen(port, function () {});
