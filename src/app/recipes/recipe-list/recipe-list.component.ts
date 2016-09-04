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
  recipes: Recipe[]=[
    new Recipe('111','111','http://images.china-pub.com/ebook4975001-4980000/4976729/zcover.jpg',[]),
    new Recipe('222','222','http://images.china-pub.com/ebook4975001-4980000/4976729/zcover.jpg',[]),
    new Recipe('333','333','http://images.china-pub.com/ebook4975001-4980000/4976729/zcover.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){

    this.recipeSelected.emit(recipe);
  }

}
