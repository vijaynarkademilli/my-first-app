import {Recipe} from './recipe.model';
import {EventEmitter,Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from 'rxjs';
import {map,tap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
/**
 * Created by vijay on 27-10-2019.
 */
@Injectable()
export class RecipeService{


    constructor(private slService:ShoppingListService,private http:HttpClient) {
    }

    recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  getRecipies(){
    return this.http.get<Recipe[]>('http://localhost:8085/allrecipes').pipe(map(recipes => {
      return recipes.map( recipe => {
        return {...recipe,ingredients:recipe.ingredients ? recipe.ingredients :[]};
      });
    }),
      tap( recipes => {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }))
  }

  getAllRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }


}
