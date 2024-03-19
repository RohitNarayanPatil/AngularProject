import { NgModule  } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users1/login/login.component';
import { HeaderComponent } from './dash/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './users1/signup/signup.component';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { UserComponent } from './dash/user/user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TestyComponent } from './users1/testy/testy.component'; 
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './dash/forms/forms.component';


import {MatButtonModule} from '@angular/material/button';
import { DataComponent } from './dash/data/data.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { DialogComponent } from './dash/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPermissionsModule } from 'ngx-permissions';
import { LocationComponent } from './dash/services/location/location.component';
// import { MaindataComponent } from './dash/maindata/maindata.component';
import {MatStepperModule} from '@angular/material/stepper';
// import {MatInputModule} from '@angular/material/input';
// import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    // DashboardComponent,
    SignupComponent,
    UserComponent,
    TestyComponent,
    FormsComponent,
    DataComponent,
    DialogComponent,

    // MaindataComponent
    
   
    
  





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatTableModule
 
    ,MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSort,
    MatPaginator,
    MatSortModule,
    ChartModule,
    HttpClientModule
    ,MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    NgxPermissionsModule.forRoot(),

MatStepperModule,
FormsModule
 

  ],
  exports: [
   
    HeaderComponent,
    // FormsComponent
  
],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
