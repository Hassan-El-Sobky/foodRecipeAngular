import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeServices } from '../recipes/recipes.services';
import { Recipes } from './../recipes/recipes';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private _http:HttpClient,private _recipeService:RecipeServices) { }

  saveRecipes(){
    const recipes:Recipes[]=this._recipeService.getRecipes();
    
    return this._http.
    put("https://ng-course-recipe-book-ebbec-default-rtdb.firebaseio.com/recipes.json",recipes)
    .subscribe(res=>{
      console.log(res);
      
    });
  }



  fetchRecipes(){
    return this._http.get<Recipes[]>("https://ng-course-recipe-book-ebbec-default-rtdb.firebaseio.com/recipes.json")
    .subscribe(
      (res)=>{
        this._recipeService.Fetchrecipes(res);
        console.log(res);
        
      }
    )
  }
}
