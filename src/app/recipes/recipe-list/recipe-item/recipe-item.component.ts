import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipes } from './../../recipes';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
    
  @Output() selectedRecipe:EventEmitter<any>=new EventEmitter<void>();
  @Input() Recipe:any;
  constructor() { }

  ngOnInit(): void {
  }

  selected() {
       this.selectedRecipe.emit();      
  }

}
