import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simple test','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/red_lentil_and_aubergine_33187_16x9.jpg'),
    new Recipe('A Test Recipe','This is simple test','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/red_lentil_and_aubergine_33187_16x9.jpg')
  ];

  ngOnInit() {
  }

}
