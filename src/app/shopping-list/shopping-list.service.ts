import {Ingredient} from "../shared/ingredient.model";
/**
 * Created by madhuri on 27-10-2019.
 */


export class ShoppingListService{

  private ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

}
