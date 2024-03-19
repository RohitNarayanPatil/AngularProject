import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  movies: any;
  // movies: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    // this.http.get<any>('https://dummyapi.online/api/movies')
    this.http.get<any[]>('https://dummyapi.online/api/movies')
      .subscribe(data => {
        // this.movies = data;
        this.movies = data.slice(0, 100);
      });
      console.warn(this.movies);
     }
     selectAll(event: any) {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox: any) => {
        checkbox.checked = event.target.checked;
      });
    }

    

}

