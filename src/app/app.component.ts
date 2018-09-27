import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Component({
  selector: 'user-poll',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  @Input() key: string;
  @Input() module: string;
  show: string = 'splash';
  pollResult: any;

  //Set Poll Id
  pollId = 1;
  pollDetail;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPollDetail();
  }

  moveToPolls(val) {
    this.show = 'poll';
  }

  getVotes(poll) {
    this.show = 'contact';
    this.pollResult = poll;
  }

  getPollDetail(){

    var resultPostUrl = "http://localhost:4001/api/v1/polls/" + this.pollId;

    this.http.get<any>(resultPostUrl)
      .subscribe(poll => {
        this.pollDetail = poll.response;
        this.pollDetail[0]['active'] = true;
      });
      // .pipe(
      //   catchError(this.handleError('addHero', hero))
      // );
    
  }

  getContactDetail (contactInfo: any){
    var resultPostUrl = "http://localhost:4001/api/v1/results";
    var results = {
      pollId: this.pollId,
      contactInfo,
      pollResult: this.pollResult
    };

    this.http.post<any>(resultPostUrl, results, {})
      .subscribe(poll => {
        console.log(poll);
        alert(poll.message || poll.error)
      });
      // .pipe(
      //   catchError(this.handleError('addHero', hero))
      // );
  }
}
