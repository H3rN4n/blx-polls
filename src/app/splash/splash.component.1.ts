import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./../../assets/css/styles.css','./splash.component.css']
})
export class SplashComponent implements OnInit {
  @Output()
  next: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  agree(){
    this.next.emit(true);
  }

}
