import {Recipe} from "./recipe.model";
/**
 * Created by madhuri on 27-10-2019.
 */

export class RecipeService{

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simple test','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/red_lentil_and_aubergine_33187_16x9.jpg'),
    new Recipe('Rice Kheer Recipe','This is simple test','https://aartimadan.com/wp-content/uploads/2019/07/rice-kheer-recipe-images-6.jpg')
  ];

  getRecipies(){
    return this.recipes.slice();
  }

}
