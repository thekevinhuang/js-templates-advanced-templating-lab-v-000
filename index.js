function init() {
  //put any page initialization/handlebars initialization here
  let main = document.getElementById("main").innerHTML
  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient',function() {
    return new Handlebars.SafeString("<p>"+this.value+"</p>")
  })

  Handlebars.registerPartial('recipeFormPartial',document.getElementById("recipe-form-partial").innerHTML)

  let recipeFormHTML = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML += recipeFormHTML()

  let recipeHTML = Handlebars.compile(document.getElementById("recipe-holder-template").innerHTML)
  document.getElementById("main").innerHTML += recipeHTML()

}

function createRecipe() {
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)

  let recipeName = document.getElementsByName("name")[0].value
  let recipeDescription = document.getElementsByName("description")[0].value
  let recipeIngredients = document.getElementsByName("ingredients")

  let newRecipeHTML = recipeTemplate({name: recipeName, description:recipeDescription, ingredients:recipeIngredients})

  document.getElementById("recipes").innerHTML += newRecipeHTML

}

function displayEditForm() {
  let editForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML += editForm({name:name, description:description, ingredients:ingredients})
}

function updateRecipe() {

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
