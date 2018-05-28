import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'user-poll',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  @Input() key: string;
  doc: any;
  answers: Array<string> = [];
  hasVoted = false;
  dataLoaded = false;
  pollRef: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    this.pollRef = this.afs.doc(`polls/${this.key}`);

    this.pollRef
      .valueChanges()
      .pipe(
        tap(doc => {
          console.log(doc);
          this.doc = doc;
          this.answers = Object.keys(doc.answers);
          this.dataLoaded = true;
        })
      )
      .subscribe();
  }

  getVotesFor(answer: string) {
    return this.doc.answers[answer].votes;
  }

  getColorFor(answer: string) {
    return this.doc.answers[answer].color;
  }

  getTotalVotes() {
    return this.answers
      .map(answer => {
        return this.getVotesFor(answer);
      })
      .reduce(function(votes, total) {
        return votes + total;
      }, 0);
  }
  
  getBgColor(answer){
    return "bg-" + this.getColorFor(answer);
  }

  getColor(answer){
    return this.getColorFor(answer);
  }

  vote(answer: string) {
    // this.hasVoted = true;
    console.log(answer, this.getVotesFor(answer) + 1);
    const result = {};
    const newResult = result[answer] = { votes: this.getVotesFor(answer) + 1 };

    this.pollRef
      // .collection('answers')
      // .doc(answer)
      .set({answers: result}, { merge: true });
      // .set({ answers:{  answer: { votes: this.getVotesFor(answer) + 1 } }}, { merge: true });
  }

  getPercent(answer: string) {
    return this.getVotesFor(answer) / this.getTotalVotes() * 100;
  }
}
