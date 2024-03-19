import { Component } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps'
//  import { PopupComponent } from './popup/popup.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { PopupComponent } from './popup/popup.component';
@Component({
  selector: 'app-glocation',
  templateUrl: './glocation.component.html',
  styleUrl: './glocation.component.css'
})
export class GlocationComponent {
  centerR: any;
  location1: any;
  lat: any;
  long: any;
  map: any;

  constructor(public dialog: MatDialog) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.location1 = position.coords;
      this.lat = this.location1.latitude;
      this.long = this.location1.longitude;
      this.centerR = [this.long, this.lat];

      console.log(this.lat);
      console.log(this.long);

      this.map = tt.map({
        key: 'sJvqgjHlbbzuS1hy5fGP44PCZ2wlNzXX',
        container: 'map',
        center: this.centerR,
        zoom: 18
      });
    });
  }
  @Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrl: './popup.component.css'
  })
  openDialog(): void {
    this.dialog.open(PopupComponent, {
      data: {
        lat: this.lat,
        long: this.long
      }
    });
  }
}
// export class GlocationComponent {
//   centerR:any
//   location1:any
//   lat:any
//   long:any
//   constructor(public dialog: MatDialog) {
 
//     openDialog() {
//       this.dialog.open(DialogElementsExampleDialog);
//     }
//     navigator.geolocation.getCurrentPosition((position)=>{

//       this.location1=position.coords
//       this.lat=this.location1.latitude
//       this.long=this.location1.longitude
//       this.centerR=[this.long,this.lat],
//       console.log(this.lat);
//       console.log(this.long);
     
//       this.map = tt.map({
//         key: 'sJvqgjHlbbzuS1hy5fGP44PCZ2wlNzXX',
//         container: 'map',
    
//         center: this.centerR,

//         zoom:18
        
//       });
      
//     })
    
//   }
//   map:any;


 
// }


