import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from '@angular/core';

/**
 * Created by madhuri on 27-10-2019.
 */


export class ShoppingListService{

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
