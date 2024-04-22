import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-testingjson',
  templateUrl: './testingjson.component.html',
  styleUrl: './testingjson.component.css'
})
export class TestingjsonComponent {
// get:any
//   responseData: any;

// constructor(private http:HttpClient){
//   // this.getData();
// }
// getData() {

//   this.http.get<any[]>('http://localhost:3000/users')
//     .subscribe((data: any) => {
//       this.get = data;
//     });
//    }
//    postData() {
//     // var id = 1; 
//     var dataToUpdate = {  
//       // "id": 1,
//     "name": " Rohit",
//     "email": "Rohit@gmail.com",
//     "number": "564665464"
//     };
//     this.http.post(`http://localhost:3000/users`, dataToUpdate).subscribe(data => {
//     // this.http.post(`${this.apiUrl}/${idToUpdate}`, dataToUpdate).subscribe(response => {
//       this.get = data;
//     });
//   }
name: string = "";
email: string = "";
number: string = "";
responseData: any;

constructor(private http: HttpClient) {
  // this.getData();
}

getData() {
  this.http.get<any[]>('http://localhost:3000/users/')
    .subscribe((data: any) => {
      this.responseData = data;
    });
}

postData() {
  const dataToUpdate = {
    "name": this.name,
    "email": this.email,
    "number": this.number
  };

  this.http.post(`http://localhost:3000/users`, dataToUpdate).subscribe((data: any) => {
    // Update response data with the new item
    if (!this.responseData) {
      this.responseData = [];
    }
    this.responseData.push(data);
    
    // Clear input fields after successful addition
    this.name = "";
    this.email = "";
    this.number = "";
  });
  
}

  
}
