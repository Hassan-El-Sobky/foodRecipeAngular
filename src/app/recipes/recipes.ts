import { Ingredient } from "../ingredient";

export interface Recipes {
    id:number
    name:string,
    description:string,
    imgPath:string,
    ingredinets:Ingredient[]
}
