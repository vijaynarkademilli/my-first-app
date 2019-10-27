import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  ngOnInit() {
    this.recipes = this.recipeService.getRecipies();
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
