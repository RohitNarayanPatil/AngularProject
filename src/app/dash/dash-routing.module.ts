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
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormAddComponent } from './form-add/form-add.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ChartComponent } from './chart/chart.component';
import { HighComponent } from './highlight/high/high.component';
import { CsvComponent } from './csv/csv.component';
import { TopicComponent } from './topic/topic.component';
import { Api1Component } from './api1/api1.component';
import { TestingjsonComponent } from './testingjson/testingjson.component';
import { QueryparamsComponent } from './queryparams/queryparams.component';
import { ParamComponent } from './queryparams/param/param.component';
import { MergeComponent } from './queryparams/merge/merge.component';
import { TestingComponent } from './testing/testing.component';
import { SpotifyComponent } from './spotify/spotify.component';

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
    { path: 'dropdown', component: DropdownComponent },
    { path: 'DATAD', component: FormAddComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'highlight', component: HighComponent },
    { path: 'csv', component: CsvComponent },
    { path: 'svg', component: TopicComponent },
    { path: 'api', component: Api1Component },
    { path: 'jsont', component: TestingjsonComponent },
    { path: 'query', component: QueryparamsComponent },
    { path: 'params', component: ParamComponent },
    { path: 'merge', component: MergeComponent },
    { path: 'testing', component: TestingComponent },
    { path: 'spotify', component: SpotifyComponent },
  
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
