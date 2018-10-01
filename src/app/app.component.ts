import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-poll',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  @Input() pollId: number = 1;
  show: string = 'splash';
  pollResult: any;
  pollDetail: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPollDetail(this.pollId);
  }

  moveToPolls(val) {
    this.show = 'poll';
  }

  getVotes(poll) {
    this.show = 'contact';
    this.pollResult = poll;
  }

  getPollDetail(pollId){

    var resultPostUrl = "http://localhost:4001/api/v1/polls/" + pollId;

    this.http.get<any>(resultPostUrl)
      .subscribe(poll => {
        this.pollDetail = poll.response;
        this.pollDetail[0]['active'] = true;
      })
    
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
  }
}
