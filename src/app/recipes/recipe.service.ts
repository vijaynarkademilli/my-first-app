import {Recipe} from './recipe.model';
import {EventEmitter,Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
/**
 * Created by madhuri on 27-10-2019.
 */
@Injectable()
export class RecipeService{


    constructor(private slService:ShoppingListService) {
    }

    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Big Fat Burger',
              'This is simple test',
              'https://tul.imgix.net/content/article/perths_best_burgers.jpg',
              [
                new Ingredient('Bub',2),
                new Ingredient('French Fries',30)
              ]),
    new Recipe('Rice Kheer',
              'This is simple test',
              'https://aartimadan.com/wp-content/uploads/2019/07/rice-kheer-recipe-images-6.jpg',
              [
                new Ingredient('Thick Milk',1),
                new Ingredient('Almonds',50)
              ])
  ];

  getRecipies(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }


}
