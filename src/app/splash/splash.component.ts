import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./../../assets/css/styles.css','./splash.component.css']
})
export class SplashComponent implements OnInit {
  @Output()
  next: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _scrollS: ScrollService) { }

  ngOnInit() {
    
  }

  agree(){
    this._scrollS.triggerScrollToPoll();
    // this.next.emit(true);
  }

}
