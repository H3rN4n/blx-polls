import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../../assets/css/styles.css', './contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() sendContact: EventEmitter<any> = new EventEmitter<any>();
  contactInfo = new FormGroup({
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('', [Validators.required, Validators.minLength(4)]),
    country: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    organization: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    jobTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    comments: new FormControl('', [])
  });

  constructor() {}

  ngOnInit() {}

  send() {
    this.sendContact.emit(this.contactInfo.value);
  }
}
