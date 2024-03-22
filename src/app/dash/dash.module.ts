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
import { ReactiveFormsModule } from '@angular/forms';

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
    NgxPermissionsModule.forChild({
      permissionsIsolate: true, 
      rolesIsolate: true}),
   
      
  ]
})
export class DashModule { }
