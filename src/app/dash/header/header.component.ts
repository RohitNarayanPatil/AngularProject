import { Component, OnInit ,Input } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
// import { NgxPermission } from 'ngx-permissions/lib/model/permission.model';
// import Chart from 'chart.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 
constructor(private ngxPermissionsService:NgxPermissionsService){

}
    ngOnInit(): void {
        this.ngxPermissionsService.loadPermissions(['DEVELOPER'])
    }

  display=true;
  toggle()
  {
this.display=!this.display;
  }
}
