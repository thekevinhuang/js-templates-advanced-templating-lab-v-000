function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerHelper('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(this.value)
  })


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
