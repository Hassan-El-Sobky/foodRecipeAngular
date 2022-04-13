import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() fetaureSelected:EventEmitter<string>=new EventEmitter<string>()
  constructor(private _dataStorage:DataStorageService) { }

  ngOnInit(): void {
  }

  onSelecet(feature:string) {
        this.fetaureSelected.emit(feature);
  }

  saveData() {
      this._dataStorage.saveRecipes();
  }
  fetchData()
  {
    this._dataStorage.fetchRecipes();
  }
}
