import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Study';
    selected:string='recipe';
  emptyString() {
    this.title=""
  }
     ngOnInit(): void {
       this.getLocation();
     }
  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          console.log(longitude);
          console.log(latitude);
          console.log(position);
          
          
          
        });
    } else {
       console.log("No support for geolocation")
    }
  }
  onNavigate(event:string) {
        
            this.selected=event;
  }

}
