import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { MaindataComponent } from './maindata/maindata.component';
import { EmailComponent } from './email/email.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { LocationComponent } from './services/location/location.component';
import { GlocationComponent } from './services/glocation/glocation.component';
import { PopupComponent } from './services/glocation/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { AgmCoreModule } from '@agm/core';
    
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DropdownComponent } from './dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { DropdownModule } from 'primeng/dropdown';
import { FormAddComponent } from './form-add/form-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ChartComponent } from './chart/chart.component';

import Chart from 'chart.js/auto';
// import { HighlightDirective } from './highlight.directive';
import { LightDirective } from './highlight/light.directive';
import { HighComponent } from './highlight/high/high.component';
import { CsvComponent } from './csv/csv.component';
import { TopicComponent } from './topic/topic.component';
import { Api1Component } from './api1/api1.component';
import { TestingjsonComponent } from './testingjson/testingjson.component';
// import { CsvComponent } from './csv/csv.component';
// import { DirectiveDirective } from './directives/directive.directive';
// import { DirectivesComponent } from './directives/directives.component';
// import { DirectivesDirective } from './directives.directive';
// import { DirectDirective } from './directives/direct.directive';


``
@NgModule({
  declarations: [
    MaindataComponent,
    EmailComponent,
    ProfileComponent,
    SettingComponent,
    GlocationComponent,
    PopupComponent,
    DropdownComponent,
    FormAddComponent,
    DatepickerComponent,
    ChartComponent,
    // HighlightDirective,
    LightDirective,
    HighComponent,
   CsvComponent,
   TopicComponent,
   Api1Component,
   TestingjsonComponent
  
 

 
    
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    MatDialogModule,
    MatProgressBarModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DropdownModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    FormsModule,
    // provideNativeDateAdapter(undefined),



    NgxPermissionsModule.forChild({
      permissionsIsolate: true, 
      rolesIsolate: true}),
  
    
      
  ]
})
export class DashModule { }
