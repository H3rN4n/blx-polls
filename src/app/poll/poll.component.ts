import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./../../assets/css/styles.css', './poll.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PollComponent implements OnInit {
  @Input() poll: Array<any>;
  @Output() sendVotes: EventEmitter<any> = new EventEmitter<any>();
  pollActivePosition: number = 0;

  constructor() {}

  pollActivePositionNext() {
    if (this.poll.length -1 == this.pollActivePosition) {
      // this.vote(this.poll);
    } else {
      this.poll[this.pollActivePosition].active = false;
      this.pollActivePosition == this.pollActivePosition++;
      this.poll[this.pollActivePosition].active = true;
    }
  }

  pollActivePositionPrevious() {
    this.poll[this.pollActivePosition].active = false;
    this.pollActivePosition == this.pollActivePosition--;
    this.poll[this.pollActivePosition].active = true;
  }

  ngOnInit() {}

  vote() {
    this.sendVotes.emit(this.poll);
  }
}
