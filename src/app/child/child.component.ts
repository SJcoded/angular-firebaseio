import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../inject/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  ogMessage = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.ogMessage = message);
  }


  @Input() clicked: boolean|undefined;

  message: string = 'Niggface';

  @Output() clickEvent = new EventEmitter<string>();


  sendClick() {
    this.clickEvent.emit(this.message);
  }
}
