import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../../assets/css/styles.css', './contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() sendContact: EventEmitter<any> = new EventEmitter<any>();
  contactInfo: Object = {
    firstname: 'Hernan',
    lastname: 'De Souza',
    email: 'desouza03068922@gmail.com',
    country: 'Argentina',
    organization: 'Belatrix',
    jobTitle: 'Dev',
    comments: 'Hola como estan?'
  };

  constructor() {}

  ngOnInit() {}

  send() {
    this.sendContact.emit(this.contactInfo);
  }
}
