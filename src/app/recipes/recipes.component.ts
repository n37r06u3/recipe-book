import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {Recipe} from "./recipe";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {RecipeService} from "./recipe.service";

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives:[RecipeListComponent, RecipeDetailComponent,ShoppingListComponent],
  providers:[RecipeService]

})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
