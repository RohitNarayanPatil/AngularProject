import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
  providers: [provideNativeDateAdapter()]
})
export class DatepickerComponent {

  minDateS: Date;
  maxDateS: Date;
 
  minDateE: Date;
  maxDateE: Date;
 
  constructor() {
    // 1st datepicker
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getDate()
    const currentMonth = new Date().getMonth()
    this.minDateS = new Date(currentYear - 0, currentMonth-1, currentDate);
    this.maxDateS = new Date(currentYear + 0,currentMonth,currentDate);    
 
    // 2nd datepicker
    this.minDateE = this.maxDateS;
    this.maxDateE = new Date(currentYear + 0,currentMonth+1,currentDate);  
  }

}
