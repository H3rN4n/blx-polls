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
  @Input() poll: any;
  @Output() sendVotes: EventEmitter<any> = new EventEmitter<any>();
  pollActivePosition: number = 0;
  lastQuestion: boolean = false;
  firstQuestion: boolean = true;

  constructor() { }

  pollActivePositionNext() {
    this.firstQuestion = false;
    this.poll.questions[this.pollActivePosition].active = false;
    this.pollActivePosition == this.pollActivePosition++;
    this.poll.questions[this.pollActivePosition].active = true;

    if (this.poll.questions.length - 1 == this.pollActivePosition) {
      // this.vote(this.poll);
      this.lastQuestion = true;
    } else {

    }
  }

  pollActivePositionPrevious() {
    this.poll.questions[this.pollActivePosition].active = false;
    this.lastQuestion = false;
    if (this.pollActivePosition > 0) {
      this.pollActivePosition == this.pollActivePosition--;
    }
    this.poll.questions[this.pollActivePosition].active = true;

    if (this.pollActivePosition == 0) {
      this.firstQuestion = true;
    } else {

    }

  }

  ngOnInit() { }

  vote() {
    this.sendVotes.emit(this.poll);
  }
}
