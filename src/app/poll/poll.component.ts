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
  styleUrls: ['./poll.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PollComponent implements OnInit {
  @Input() poll: any;
  @Output() sendVotes: EventEmitter<any> = new EventEmitter<any>();
  pollActivePosition: number = 0;

  constructor() { }

  pollActivePositionNext() {
    if (this.poll.questions.length - 1 == this.pollActivePosition) {
      this.vote(this.poll);
    } else {
      this.poll.questions[this.pollActivePosition].active = false;
      this.pollActivePosition == this.pollActivePosition++;
      this.poll.questions[this.pollActivePosition].active = true;
    }
  }

  pollActivePositionPrevious() {
    this.poll.questions[this.pollActivePosition].active = false;
    this.pollActivePosition == this.pollActivePosition--;
    this.poll.questions[this.pollActivePosition].active = true;
  }

  onSelectionChange(questionIndex, answerIndex) {
    console.log(questionIndex, answerIndex)
    this.poll.questions[questionIndex].answers = this.poll.questions[questionIndex].answers.map((answer) => {
      answer.status = "";
      return answer;
    })
    this.poll.questions[questionIndex].answers[answerIndex].status = "checked";
  }

  ngOnInit() { }

  vote(poll) {
    this.sendVotes.emit(poll);
  }
}
