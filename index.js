import Recipe from './domain/Recipe.js'
import Ingredient from './domain/Ingredient.js'

const tomatoSoup = new Recipe()
tomatoSoup.addIngredient(new Ingredient("tomato"))
tomatoSoup.addIngredient(new Ingredient("salt"))

console.log("This test program now just prints out ingredients of tomato soup:\n")
console.log(printRecipe(tomatoSoup))

function printRecipe(recipe) {
  return "Tomato soup\n" +
    "-------------\n" + 
  printIngredients(recipe.listIngredients())
}

function printIngredients(ingredients) {
  return ingredients.map(ingredient => "   " + ingredient.name + "\n").join("")
}
