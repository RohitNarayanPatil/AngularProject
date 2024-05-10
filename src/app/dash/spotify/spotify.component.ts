import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrl: './spotify.component.css'
})
export class SpotifyComponent {
  title = 'WeatherApp';
  city: string = '';
  items: any;
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {
    this.http.get(this.apiUrl).subscribe(response => {
      this.items = response;
      this.items=this.items.slice(0,20);
    });
   }

  }
  // getData() {
  //   if (true) {
  //     this.http.get(`https://billboard-api5.p.rapidapi.com/api/charts/hot-100`, {
  //       params: {week: '2022-10-08'},
  //       headers: {
  //         'X-RapidAPI-Key': '1816a5a4a9msh573fe97b79bbc33p12e184jsnb097a2608260',
  //         'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
      
  //       }
  //     }).subscribe((data: any) => {
  //       this.items = data;
  //       // this.showImage = true; // Hide the image after getting the weather data
  //       console.warn("items", this.items);
  //     });
  //   }

    