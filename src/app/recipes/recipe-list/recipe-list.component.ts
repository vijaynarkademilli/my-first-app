import { Component, OnInit,OnDestroy} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Router,ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {


  constructor(private recipeService:RecipeService,private router: Router,private route: ActivatedRoute) { }

  recipes: Recipe[];

  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.getRecipes();
  }

  public getRecipes(){
    this.recipeService.getRecipies().subscribe();
  };

  onNewRecipe(){
      //noinspection TypeScriptValidateTypes
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}
