import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-queryparams',
  templateUrl: './queryparams.component.html',
  styleUrl: './queryparams.component.css'
})
export class QueryparamsComponent {
  constructor(public router:Router) {
    // this.getData();
  }
  
  goProducts() {
    this.router.navigate(
      ['/dashboard/header/params'],
      { queryParams: { q: 'popular' , 'price-range': 'not-cheap'} }
    );
  }
}
