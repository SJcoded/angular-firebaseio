import { Component, DoCheck, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck {


  clicked = false;
  title = `Angular ${VERSION.full} is a weird version`;
  colour = 'red';

  me = {
    name: 'SJ Triffon',
    title: 'Software Engineer',
    email: 'who@sjcoded.com',
  }

  changeColour() {
    this.colour = this.colour === 'red' ? 'green' : 'red';
  }
  
  handleClick() {
    this.clicked = !this.clicked;
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

}
