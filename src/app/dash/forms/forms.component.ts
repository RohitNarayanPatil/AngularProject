import { Component } from '@angular/core';
// import { DashboardComponent } from '../dashboard.component';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
// import {MatButtonModule} from '@angular/material/button';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

}
