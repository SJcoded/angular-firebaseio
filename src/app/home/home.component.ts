import { Component, DoCheck, OnInit, Input } from '@angular/core';
import { VERSION } from '@angular/compiler';
import { DataService } from '../inject/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck, OnInit {

  ogMessage = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.ogMessage = message);
  }

  clicked = false;
  title = `Angular ${VERSION.full} is a weird version`;
  colour = 'red';
  message = 'definitely just a face'

  me = {
    name: 'SJ Triffon',
    title: 'Software Engineer',
    email: 'who@sjcoded.com',
  }

  recieveMessage($event: string) {
    this.message = $event;
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
