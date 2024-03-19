import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { FormsComponent } from './forms/forms.component';
import { MaindataComponent } from './maindata/maindata.component';
import { EmailComponent } from './email/email.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { LocationComponent } from './services/location/location.component';
import { GlocationComponent } from './services/glocation/glocation.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent,  
  children: [
    { path: '', redirectTo: 'header', pathMatch: 'full' },
    { path: 'user', component: UserComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'email', component: EmailComponent },
    { path: 'maindata', component: MaindataComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'setting', component: SettingComponent },
    { path: 'location', component: LocationComponent },
    { path: 'glocation', component: GlocationComponent },

  ]
},
  // {path:'user', component:UserComponent},
  // {path:'forms', component:FormsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
