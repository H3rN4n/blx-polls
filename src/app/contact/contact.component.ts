import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators }   from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../../assets/css/styles.css', './contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() sendContact: EventEmitter<any> = new EventEmitter<any>();

  contactInfo: Object = {
    firstname: '',
    lastname: '',
    email: '',
    organization: '',
    jobTitle: '',
    comments: ''
  };

  constructor() {}

  ngOnInit() {
    // this.contactInfo = new FormGroup({
    //   'lastname': new FormControl("", [
    //     Validators.required,
    //     Validators.minLength(4)
    //   ])
    // });
    
  }

  send() {
    this.sendContact.emit(this.contactInfo);
  }
}
