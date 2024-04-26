import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css'
})
export class FormAddComponent {

  // dataform = new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   age: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(2),]),
  // });
  // data: any[] = [];
  // ngOnInit(): void {
  //   const savedData = localStorage.getItem('formData');
  //   if (savedData) {
  //     this.data = JSON.parse(savedData);
  //   }
  // }
  // add() {
  //   this.data.push(this.dataform.value);
  //   this.dataform.reset();
  //   localStorage.setItem('formData', JSON.stringify(this.data));
  // }
  // delete(index: number) {
  //   this.data.splice(index, 1);
  //   localStorage.setItem('formData', JSON.stringify(this.data));
  // }
  // limitToTwoDigits(event: any) {
  //   const input = event.target;
  //   if (input.value.length > 2) {
  //     input.value = input.value.slice(0, 2); // Take only the first two characters
  //   }
  // }
  dataform!: FormGroup;
  data: any[] = [];
  editMode: boolean = false;
  editIndex!: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataform = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(99)]]
    });

    // Load data from local storage if available
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      this.data = JSON.parse(storedData);
    }
  }

  add() {
    if (this.editMode) {
      this.data[this.editIndex] = this.dataform.value;
      this.editMode = false;
      // this.editIndex = undefined;
    } else {
      this.data.push(this.dataform.value);
    }
    this.saveDataToLocal();
    this.dataform.reset();
  }
  delete(index: number) {
    this.data.splice(index, 1);
    this.saveDataToLocal();
  }

  edit(index: number) {
    this.editMode = true;
    this.editIndex = index;
    const { name, age } = this.data[index];
    this.dataform.patchValue({ name, age });
  }

  cancelEdit() {
    this.editMode = false;
    // this.editIndex = undefined;
    this.dataform.reset();
  }

  limitToTwoDigits(event: any) {
    const value = event.target.value;
    if (value.length > 2) {
      event.target.value = value.slice(0, 2);
    }
  }

  private saveDataToLocal() {
    localStorage.setItem('formData', JSON.stringify(this.data));
  }
}
