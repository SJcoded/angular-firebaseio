import { Component, OnInit } from '@angular/core';
import { DataService } from '../inject/data.service';


@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {


  message = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  updateMessage(message: string) {
    this.data.changeMessage(message);
  }

}
