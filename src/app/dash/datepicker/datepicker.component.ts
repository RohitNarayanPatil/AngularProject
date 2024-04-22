import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(-20 , 0, 1);
    this.maxDate = new Date(currentYear + 0 , currentMonth, currentDate);
  }
}
