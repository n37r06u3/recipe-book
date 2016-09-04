import {Ingredient} from "../shared/ingredient";
export class Recipe {

  constructor(public name, public desc, public imgPath, public ingredients: Ingredient[]){}

}
