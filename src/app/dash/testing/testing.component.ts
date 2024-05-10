import { Component } from '@angular/core';
import { url } from 'inspector';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})


export class TestingComponent {
song = new Audio();
currentSongIndex = 0;
public songs=[
  
    { name: 'Little Krishna', url: 'assets/r1.mp3', imageUrl: './assets/r12.jpg' },
    { name: 'Song 1', url: './assets/r1.mp3', imageUrl:  './assets/r12.jpg' },
    { name: 'Song 1', url: './assets/r1.mp3', imageUrl:  './assets/r12.jpg' },
    { name: 'Song 1', url: './assets/r1.mp3', imageUrl:  './assets/r12.jpg' },
    { name: 'Song 1', url: './assets/r1.mp3', imageUrl:  './assets/r12.jpg' },
    { name: 'Song 1', url: './assets/r1.mp3', imageUrl:  './assets/r12.jpg' },
    { name: 'Song 1', url: './assets/r1.mp3', imageUrl:  './assets/r12.jpg' },
    { name: 'Song 1', url: './assets/r1.mp3', imageUrl:  './assets/r12.jpg' },

]

openSong(song:any){
this.song.src=song;
this.song.load();
this.song.play();

}
playsong(){
// this.song.play();
if (this.song.paused) {
  this.song.play();
} else {
  this.song.pause();
}
}
// pausesong(){
// this.song.pause();
// }
stopsong(){
this.song.pause();
this.song.currentTime=0;
}

}