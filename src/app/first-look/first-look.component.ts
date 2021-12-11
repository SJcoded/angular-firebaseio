import { Component, OnInit } from '@angular/core';
import { DataService } from '../inject/data.service';

@Component({
  selector: 'app-first-look',
  templateUrl: './first-look.component.html',
  styleUrls: ['./first-look.component.scss']
})
export class FirstLookComponent implements OnInit {

  message = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
