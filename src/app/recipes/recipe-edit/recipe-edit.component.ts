import { Component, OnInit } from '@angular/core';
import { RecipeServices } from '../recipes.services';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
 id:number=0;
 editMode:boolean=false;
 myForm:FormGroup|any
  constructor(private _reService:RecipeServices,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id'] !=null;
        this.initForm();
      }
      )
  }



  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngradients=new FormArray([])

    if(this.editMode)
    {
      const recipe=this._reService.getRecipe(this.id)[0];
       recipeName=recipe.name;
       recipeImagePath=recipe.imgPath;
       recipeDescription=recipe.description;
       
       if(recipe['ingredinets'])
       {
         for (let ing of recipe.ingredinets)
         recipeIngradients.push(new FormGroup({
           'name':new FormControl(ing.name),
           'amount':new FormControl(ing.amount)
         }))
       }
       console.log(recipe);
       
    }
    this.myForm=new FormGroup({
        'name':new FormControl(recipeName,Validators.required),
        'imgPath':new FormControl(recipeImagePath,Validators.required),
        'description':new FormControl(recipeDescription,Validators.required) ,
        'ingredients':recipeIngradients,
        'id':new FormControl(this.id) 
    })
  }
  get controls() { // a getter!
    return (<FormArray>this.myForm.get('ingredients')).controls;
  }
  addInd() {
     (<FormArray>this.myForm.get('ingredients')).push(
       new FormGroup({
         'name':new FormControl(null,Validators.required),
         'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
       })
     )
  }
   
  Save(){
    if(this.editMode){
      this._reService.updateRecipe(this.id-1,this.myForm.value)
      console.log(this.myForm.value);
      
    } else {
      this._reService.addNewRec(this.myForm.value)
    }
  }

}
