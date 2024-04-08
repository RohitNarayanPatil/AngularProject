import { Component } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {
  fillColor = 'rgb(240, 0, 0)';
  text: any;

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
  onKeydown(){
    var text = "pressed ";
  
    console.warn(text);
    this.text = text;
  }
}
