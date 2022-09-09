const render = new Renderer();
const fetchIngredientData = function () {
  let input = $("#ingredient-input").val();

  $.get(`recipes/${input}`, function (recipes) {
     render.render(recipes)
  });
};



$(".main").on("click", "#image", function () {
  alert($(this).closest("#recipe").find("li").first().text());
});
  