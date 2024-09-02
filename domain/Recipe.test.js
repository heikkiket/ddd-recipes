import Recipe from './Recipe'
import Ingredient from './Ingredient'

describe('Recipe', () => {
  describe('List ingredients', () => {
    test('returns empty array when no ingredients', () => {
      const recipe = new Recipe()

      expect(recipe.listIngredients()).toEqual([])
    })

    test('returns added ingredients', () => {
      const recipe = new Recipe()
      const tomato = new Ingredient('tomato')
      const carrot = new Ingredient('carrot')

      recipe.addIngredient(tomato)
      recipe.addIngredient(carrot)

      expect(recipe.listIngredients()).toEqual([tomato, carrot])
    })
  })

  describe('Add ingredient', () => {
    test('throws if no ingredient passed', () => {
      const recipe = new Recipe()

      expect(() => recipe.addIngredient({})).toThrow(new TypeError("Passed argument is not of type 'Ingredient'"))
    })

    test('accepts ingredient', () => {
      const recipe = new Recipe()
      const ingredient = new Ingredient('tomato')

      expect(() => recipe.addIngredient(ingredient)).not.toThrow(TypeError)
    })
  })
})
