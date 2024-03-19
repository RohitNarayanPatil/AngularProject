import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users1/login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './dash/user/user.component';
// import { TestyComponent } from './user/testy/testy.component';
import { FormsComponent } from './dash/forms/forms.component';
import { DataComponent } from './dash/data/data.component';
import { SignupComponent } from './users1/signup/signup.component';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('./dash/dash.module').then(m => m.DashModule)
  },  {
    path: 'users',
    loadChildren: () => import('./users1/users1.module').then(m => m.Users1Module)
  },



  
  {path:'', redirectTo:'/users/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
