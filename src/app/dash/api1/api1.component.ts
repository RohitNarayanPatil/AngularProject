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
  // Method to perform POST request
  // postData() {
  //   const idToUpdate = 1; 
  //   const dataToSend = {  "id": 1,
  //   title: "hello",
  //   body: " Patil",
  //   userId: 9,
  //   tags: [
  //     "Smart",
  //     "Inteligent",
  //     "brilliant"
  //   ],
  //   "reactions": 2 };
  //   this.http.post(this.apiUrl, dataToSend).subscribe(response => {
  //     this.responseData = response;
  //   });
  // }
  postData() {
    const idToUpdate = 1; 
    const dataToUpdate = {  
      title: "hii",
      // body: " Patil",
      // tags: [
      //   "Smart",
      //   "Intelligent",
      //   "brilliant"
      // ],
      // "reactions": 2 
    };
    this.http.post(`${this.apiUrl}`, dataToUpdate).subscribe(response => {
    // this.http.post(`${this.apiUrl}/${idToUpdate}`, dataToUpdate).subscribe(response => {
      this.responseData = response;
    });
  }

  // Method to perform PUT request
  putData() {
    const idToUpdate = 1; // Example ID
    var newData = { title:'hello' ,body:'Rohit Patil',  };
    this.http.put(`${this.apiUrl}/${idToUpdate}`, newData).subscribe(response => {
    // this.http.put(`this.apiUrl`, newData).subscribe(response => {
      this.responseData = response;
    });
  }

  // Method to perform DELETE request
  deleteData() {
    const idToDelete = 1;
    // this.http.delete(this.apiUrl).subscribe(() => {
    this.http.delete(`${this.apiUrl}/${idToDelete}`).subscribe(() => {
      this.responseData = "All data deleted";
    });
  }
  // deleteData() {
  //   const idToDelete = 1; // Example ID
  //   this.http.delete(this.apiUrl).subscribe(() => {
  //   // this.http.delete(`${this.apiUrl}/${idToDelete}`).subscribe(response => {
  //     // this.responseData = response;
  //     this.responseData = "deleted";
      
  //   });
  }
  // users: any[] | undefined;
  // constructor(private http: HttpClient) { }
  // ngOnInit() {
  //   // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(users => {
  //   this.http.get<any[]>('https://dummyjson.com/posts').subscribe(users => {
  //     this.users = users;
  //     console.warn(this.users)
  //   });
  // }
