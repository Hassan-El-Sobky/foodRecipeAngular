import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipes } from '../recipes';
// import { RecipeServices } from '../recipes.services';
import { RecipeServices } from './../recipes.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // @Output() subRecipe:EventEmitter<any>=new EventEmitter<any>();
  Recipes:Recipes[]=[];
  constructor(private _RecipeServcies:RecipeServices ,private router:Router,private _ActivedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.Recipes= this._RecipeServcies.getRecipes();
    this._RecipeServcies.subRecipes.subscribe(
     (Recipe:Recipes[])=>{
       this.Recipes=Recipe
       console.log(this.Recipes);
       
     }
    )
  }

  selectedItem(recipe:any) {
    console.log(recipe);
    this._RecipeServcies.selecteditem.emit(recipe);
    //  this.subRecipe.emit(recipe);
  }
  goToNew() {
           
     this.router.navigate(['new'],{relativeTo:this._ActivedRoute})
  }
}
