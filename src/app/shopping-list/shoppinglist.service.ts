import { Ingredient } from "../ingredient";
import { EventEmitter } from '@angular/core';
import { Subject } from "rxjs";

export class ShoppingListServices {
    
    newData:EventEmitter<Ingredient>=new EventEmitter<Ingredient>();
    setItemIndex:Subject<any>=new Subject<any>()
    pushItem:Subject<Ingredient>=new Subject<Ingredient>()
    ingredients:Ingredient[]=[{name:'Apples',amount:8},{name:"Tomato",amount:10}];

    getIngredients():Ingredient[] {
        return this.ingredients;
    }

    setNewdata(arr:Ingredient[]) {
        // this.ingredients.push(event);
    //   this.newData.subscribe(
    //       (data)=>{
    //            this.ingredients.push(data);
    //           console.log(data);
              
    //       }
    //   )
         this.pushItem.subscribe(res=>{
            this.ingredients.push(res);
             console.log(this.ingredients);
                 
         })      
           
  }
  addData(ings:Ingredient[]){
         for(let ing of ings){
              this.ingredients.push(ing);
         }
         console.log(this.ingredients);
         
  }
  getDatabyIndex(i:number){
     return this.ingredients[i];
  }
  updateItem(i:number,newData:Ingredient)
  {
       this.ingredients[i]=newData;
  }

  deleteItem(i:number) {
      this.ingredients.splice(i,1);
  }
}