import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queryparams',
  templateUrl: './queryparams.component.html',
  styleUrl: './queryparams.component.css'
})
export class QueryparamsComponent {
  // constructor(public router:Router) {
  //   // this.getData();
  // }
  
  // goProducts() {
  //   this.router.navigate(
  //     ['/dashboard/header/params'],
  //     { queryParams: { q: 'popular' , 'price-range': 'not-cheap'} }
  //   );
    
  // }
  constructor(private route:Router){}
  goUsers() {
    this.route.navigate(['/dashboard/header/params'],
      {
        queryParams:{q:'query-param'}
      }
    );
  }
  // goPreserve() {
  //   this.route.navigate(
  //     ['/all/appmenu/API'],
  //     { queryParamsHandling: 'preserve' }
  //   );
  // }
  // goMerge() {
  //   this.route.navigate(
  //     ['/all/appmenu/products'],
  //     {
  //       queryParams: { filter: 'low-price' },
  //       queryParamsHandling: 'merge' }
  //     );
  // }
}
