import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component"
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives:[RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];
  recipe= new Recipe('111','222','http://111.')
  constructor() { }

  ngOnInit() {
  }



}
