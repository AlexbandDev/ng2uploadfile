import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent implements OnInit {
  form = new FormGroup({
    lowerCase: new FormControl('',Validators.required),
    upperCase: new FormControl('',Validators.compose([ Validators.required, Validators.pattern("[A-Z]{3}")])),
  });

  setValue() {
    this.form.setValue({lowerCase: 'abc', upperCase:'ABC'});
  }
  reset() {
    this.form.setValue({lowerCase: '', upperCase})
  }

  constructor() { }

  ngOnInit() {
  }

}
