import { Recipes } from "./recipes";
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListServices } from './../shopping-list/shoppinglist.service';
import { Ingredient } from './../ingredient';
import { Subject } from "rxjs";


@Injectable()
export class RecipeServices {

    selecteditem:EventEmitter<string>=new EventEmitter<string>();
    subRecipes:Subject<Recipes[]>=new Subject<Recipes[]>()
    Recipes:Recipes[]=[
        {id:1,name:"A Test Recipe",description:" Lorem",
        imgPath:"https://iwashyoudry.com/wp-content/uploads/2021/01/American-Goulash-Recipe.jpg",
        ingredinets:[{name:"buns",amount:10}]
       },
       {id:2,name:"A Test Recipe Twoo",description:" Lorem",
        imgPath:"https://top10cairo.com/wp-content/uploads/2015/12/best-burger-restaurant-places-in-cairo-696x365.jpg",
        ingredinets:[{name:"buns",amount:10}]
       }
    ];

    constructor(private _SLS:ShoppingListServices){}

    Fetchrecipes(Recipes:Recipes[]){
        this.Recipes=Recipes;
    }
   getRecipes():Recipes[]{
       return this.Recipes.slice();
   }

   addIngToSSL(ings:Ingredient[]) {
          this._SLS.addData(ings);
   }

   getRecipe(id:number){
       return this.Recipes.filter((rec,idex)=>{
           return rec.id==id;
       });
   }

   addNewRec(recipce:Recipes){
        this.Recipes.push(recipce);
        console.log(this.Recipes);
        
        this.subRecipes.next(this.Recipes.slice())
   }

   updateRecipe(index:number,recipe:Recipes){
       this.Recipes[index]=recipe;
       this.subRecipes.next(this.Recipes.slice())
   }
}