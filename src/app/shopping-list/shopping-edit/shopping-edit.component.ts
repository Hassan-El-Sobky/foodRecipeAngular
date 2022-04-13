import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/ingredient';
import { ShoppingListServices } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName',{static:true}) inputName:ElementRef|undefined;
  @ViewChild('inputControl',{static:true}) inputControl:ElementRef|undefined;
  @ViewChild('f',{static:true}) form:any;
  myItem:Ingredient={name:'',amount:0};
  editMode:boolean=false;
  itemId:number=0;
  // @Output() newAdd:EventEmitter<{name:string,amount:number}>=new EventEmitter<{name:string,amount:number}>();
  constructor(private _sLserveice:ShoppingListServices) { 
    
  }

  ngOnInit(): void {
    this._sLserveice.setItemIndex.subscribe(
      (idx=>{
        this.myItem=this._sLserveice.getDatabyIndex(idx);
        console.log(this.myItem);
        this.itemId=idx;
        this.editMode=true;
        this.form.setValue({
          name:this.myItem.name,
          amount:this.myItem.amount,
        })
      })
    )
  }

  // submitAdd() {
  //   let name=this.inputName?.nativeElement.value;
  //   let amount=this.inputControl?.nativeElement.value;
     
  //   // this.newAdd.emit({name,amount});
  //   this._sLserveice.newData.emit({name,amount});
  //   this._sLserveice.setNewdata();
  // }
  SubmitItem(f:NgForm) {
    //  this._sLserveice.newData.emit({name:f.value.name,amount:f.value.amount});
    // console.log({name:f.value.name,amount:f.value.amount});
    //  this._sLserveice.setNewdata();
    if(this.editMode){
           this._sLserveice.updateItem(this.itemId,{name:f.value.name,amount:f.value.amount})
    } else {
      this._sLserveice.pushItem.next({name:f.value.name,amount:f.value.amount});

    }
    this.editMode=false;
    f.reset();
  }

  deleteItem() {
    this._sLserveice.deleteItem(this.itemId);
  }
  
}
