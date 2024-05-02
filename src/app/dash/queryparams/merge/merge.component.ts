import { Component } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
// import { Component } from '@angular/core';
// import { } from '@angular/router';
@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.css'
})
export class MergeComponent {
  order: any;
  constructor(private route: ActivatedRoute, private routing:Router) { }
  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe((params) => {
        console.log(params);
        this.order = { ...params.keys, ...params };
        console.warn(this.order);
      })
}
 goMerge() {
    this.routing.navigate(
      ['/dashboard/header/merge'],
      {
        queryParams: { filt: 'high-price' },
        queryParamsHandling: 'merge' }
      );
  }
}