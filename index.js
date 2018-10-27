function init() {
  //put any page initialization/handlebars initialization here
  let mainHTML = document.getElementById("main").innerHTML
  
  Handlebars.registerHelper('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(this.value)
  })

  let initialForm = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  mainHTML += initialForm()
}

function createRecipe() {

}

function updateRecipe() {

}

function displayEditForm() {

}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
