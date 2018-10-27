function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString(this.value)
  })


}





document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
