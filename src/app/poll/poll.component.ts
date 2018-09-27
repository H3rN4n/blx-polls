import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PollComponent implements OnInit {
  @Input() key: string;

  constructor() {
  }

  ngOnInit() {
   
  }


  vote(answer: string) {
   
  }

}
