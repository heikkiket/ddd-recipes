import Ingredient from './Ingredient.js'

export default class Recipe {
  constructor() {
    this.ingredients = []
  }

  listIngredients() {
    return this.ingredients
  }

  addIngredient(ingredient) {
    if(ingredient instanceof Ingredient) {
      this.ingredients.push(ingredient)
    } else {
      throw new TypeError("Passed argument is not of type 'Ingredient'");
    }
  }
}
