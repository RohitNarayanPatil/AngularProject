import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css'
})
export class FormAddComponent {
  // dataform = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });

  // data:any[]=[]

  // add() {
  //   this.data.push(this.dataform.value)
  //   this.dataform.reset()
  // }
  // delete(index:number){
  //   this.data.splice(index,1)
  // }
  dataform = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  data: any[] = [];

  ngOnInit(): void {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.data = JSON.parse(savedData);
    }
  }

  add() {
    this.data.push(this.dataform.value);
    this.dataform.reset();
    localStorage.setItem('formData', JSON.stringify(this.data));
  }

  delete(index: number) {
    this.data.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(this.data));
  }
}
