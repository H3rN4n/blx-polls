import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'user-poll',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  @Input() key: string;
  @Input() module: string;
  show: string = 'contact';

  constructor() {
  }

  ngOnInit() {
   
  }


  vote(answer: string) {
   
  }

}
