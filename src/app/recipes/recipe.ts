import {Ingredient} from "../shared/ingredient";
export class Recipe {

  constructor(public name:string, public desc:string, public imgPath:string, public ingredients: Ingredient[]){}

}
