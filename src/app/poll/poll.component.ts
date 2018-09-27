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
  @Input() poll: Array<any>;
  @Output() sendVotes: EventEmitter<any> = new EventEmitter<any>();
  pollActivePosition: number = 0;
  // poll: Array<any> = [
  //   {
  //     text: 'Lobo esta?',
  //     type: 'radio',
  //     active: true,
  //     answers: [
  //       {
  //         text: 'se esta poniendo el pantalon',
  //         correct: false
  //       },
  //       {
  //         text: 'se esta poniendo el camisa',
  //         correct: false
  //       },
  //       {
  //         text: 'siiii',
  //         correct: true
  //       }
  //     ]
  //   },
  //   {
  //     text: 'Sal de ahí chivita chivita?',
  //     type: 'radio',
  //     active: false,
  //     answers: [
  //       {
  //         text: 'sal de ahi de ese lugar',
  //         correct: true
  //       },
  //       {
  //         text: 'vente pa ca',
  //         correct: false
  //       },
  //       {
  //         text: 'siiii',
  //         correct: false
  //       }
  //     ]
  //   }
  // ];

  constructor() {}

  pollActivePositionNext() {
    if (this.poll.length -1 == this.pollActivePosition) {
      this.vote(this.poll);
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

  vote(poll) {
    this.sendVotes.emit(poll);
  }
}
