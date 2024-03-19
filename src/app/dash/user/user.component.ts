import { Component, OnInit } from '@angular/core';

// import { __values } from 'tslib';
// import { ServicesService } from '../data-tables/services.service';
// import { dataUri } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {
//   users:any;
// constructor(private userData:ServicesService){
// userData.users().subscribe((data)=>{
//   war
//   this.users=data

// })

// console.warn(this.users)

display=true;
toggle()
{
this.display=!this.display;
}


}
