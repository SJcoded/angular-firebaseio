import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clicked = false;
  title = `Angular ${VERSION.full} is a weird version`;
  colour = 'red';

  changeColour() {
    this.colour = this.colour === 'red' ? 'green' : 'red';
  }
  
  handleClick() {
    this.clicked = !this.clicked;
  }
}
