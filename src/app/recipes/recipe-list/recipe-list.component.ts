import { Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService:RecipeService,private router: Router,private route: ActivatedRoute) { }

  recipes: Recipe[];

  ngOnInit() {
    this.recipes = this.recipeService.getRecipies();
  }

  onNewRecipe(){
      //noinspection TypeScriptValidateTypes
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
