import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';

import * as tt from '@tomtom-international/web-sdk-maps'
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  country:any;
  selectedState: any; 
  selectedCountry: any;
  selectedCity:any;
  states:any;
  
  constructor(private htttp:HttpClient){
      this.htttp.get<any[]>('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json')
    .subscribe(data=>{
      this.country = data;
      // this.country = data.slice(0, 10);
    });
    console.warn(this.country);
  }
  ngOnInit(){
  }


  map: any
  centery: any
  citycord:any
 
 
  getLocation(){
    debugger; 
    this.citycord=[this.selectedCity.longitude,this.selectedCity.latitude]
    this.centery=this.citycord
    console.warn(this.citycord);
    this.map=tt.map({
      key: 'sJvqgjHlbbzuS1hy5fGP44PCZ2wlNzXX',
      container: 'map',
      zoom: 10,
      center: this.centery,
    })
  }
}
