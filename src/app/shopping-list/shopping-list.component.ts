import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingListServices } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[];
  constructor(private _sLserv:ShoppingListServices) { }

  ngOnInit(): void {
    this.ingredients=this._sLserv.getIngredients();
    console.log(this.ingredients);
     this._sLserv.setNewdata(this.ingredients);
    
  }
  getItemIndex(i:number) {
          this._sLserv.setItemIndex.next(i);
  }
  
  // setNewdata(event:any) {
  //       this.ingredients.push(event);
  // }
}
