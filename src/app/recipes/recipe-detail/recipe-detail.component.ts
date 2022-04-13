import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServices } from '../recipes.services';
import { Recipes } from './../recipes';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  //@Input()showRecipe:any;
   showRecipes:Recipes[]=[];
   showRecipe:Recipes={name:'',description:'',imgPath:'',id:1,ingredinets:[]};
  constructor(private _RS:RecipeServices,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(
       (data)=>{
         console.log(data['id']);
          this.showRecipes=this._RS.getRecipes()
          this.showRecipe=this.showRecipes.filter((idx)=> data['id']==idx.id)[0];
          console.log(this.showRecipe);
          
       }
     )
  }

  addToShopping(Recipe:any) {
      
      this._RS.addIngToSSL(Recipe.ingredinets);
    
  }

}
