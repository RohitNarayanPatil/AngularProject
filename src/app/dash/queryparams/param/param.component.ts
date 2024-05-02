import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {NgxTypedJsModule} from ‘ngx-typed-js’;
@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrl: './param.component.css'
})
export class ParamComponent {
  constructor(private route:Router){}
  goMerge() {
    this.route.navigate(
      ['/dashboard/header/params'],
      {
        queryParams: { filter: 'low-price' },
        queryParamsHandling: 'merge' }
      );
  }
  goPreserve() {
    this.route.navigate(
      ['/dashboard/header/merge'],
      { queryParamsHandling: 'preserve' }
    );
  }
}
