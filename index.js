function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(this.value)
  })

  let initialForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML += initialForm()
}

function createRecipe() {
  let formName = document.getElementById("name").innerHTML
  let formDescription = document.getElementById("description").innerHTML
  let formIngredients = document.getElementsByName("ingredients")

  let recipe = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = recipe({name: formName, description: formDescription, ingredients: formIngredients})

}

function updateRecipe() {

}

function displayEditForm() {

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
