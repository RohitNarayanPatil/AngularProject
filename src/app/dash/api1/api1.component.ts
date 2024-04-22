import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrl: './api1.component.css'
})
export class Api1Component  {
  // apiUrl = 'https://dummyjson.com/posts/1';
  // apiUrl = 'https://dummyjson.com/posts';
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  responseData: any;

  constructor(private http: HttpClient) { }

  // Method to perform GET request
  getData() {
    this.http.get(this.apiUrl).subscribe(response => {
      this.responseData = response;
    });
  }

    // Method to perform PUT request
    putData() {
      var idToUpdate = 1; // Example ID
      var newData = { userId:1, id:"" ,title:"Rohit Patil",desc:"Put request successfully"  };
      this.http.put(`${this.apiUrl}/${idToUpdate}`, newData).subscribe(response => {
      // this.http.put(`this.apiUrl`, newData).subscribe(response => {
        this.responseData = response;
      });
    }
  postData() {
    var idToUpdate = 1; 
    var dataToUpdate = {  
      userId:1, id:"",title:" Patil",desc:"Post request successfully" 
    };
    this.http.post(`${this.apiUrl}`, dataToUpdate).subscribe(response => {
    // this.http.post(`${this.apiUrl}/${idToUpdate}`, dataToUpdate).subscribe(response => {
      this.responseData = response;
    });
  }


  // Method to perform DELETE request
  deleteData() {
    var idToDelete = 1;
    // this.http.delete(this.apiUrl).subscribe(() => {
    this.http.delete(`${this.apiUrl}/${idToDelete}`).subscribe(() => {
      this.responseData = "All data deleted";
    });
  }

  }
