import { Component, OnInit } from '@angular/core';
import { RecipeServices } from './recipes.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers:[RecipeServices]
})
export class RecipesComponent implements OnInit {
  selectedItem:any;
  constructor(private _RecipeService:RecipeServices) {
    
   }

  ngOnInit(): void {
    this._RecipeService.selecteditem.subscribe((data)=>{
          console.log(data);

          this.selectedItem=data
          
    })
  }

}
