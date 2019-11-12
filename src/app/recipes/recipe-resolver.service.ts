import {Injectable} from "@angular/core";
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
/**
 * Created by vijay on 12-11-2019.
 */

@Injectable()
export class RecipeResolverService implements Resolve<Recipe[]>{

    constructor(private recipeService:RecipeService) {
    }

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
      const recipes = this.recipeService.getAllRecipes();
      if(recipes.length === 0){
            return this.recipeService.getRecipies();
        }else{
          return recipes;
        }
    }

}


