import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
  providers: [provideNativeDateAdapter()]
})
export class DatepickerComponent {

  minDate: Date;
  maxDate: Date;

  constructor() {
    const currentDate = new Date().getDate();
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, currentDate);
    this.maxDate = new Date(currentYear + 0, 0, currentDate);
  }
}
