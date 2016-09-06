import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[]=[
    new Recipe('111','111','http://images.china-pub.com/ebook4975001-4980000/4976729/zcover.jpg',[
      new Ingredient("11111",2),
      new Ingredient("111",2),
    ]),
    new Recipe('222','222','http://images.china-pub.com/ebook4975001-4980000/4976729/zcover.jpg',[]),
    new Recipe('333','333','http://images.china-pub.com/ebook4975001-4980000/4976729/zcover.jpg',[])
  ];
  constructor() { }

  getRecipes(){
    return this.recipes
  }
}
