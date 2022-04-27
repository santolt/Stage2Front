import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  registrationFormGroup!: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildRegistrationForm();
  }

  get titleInput() : AbstractControl{
    return this.registrationFormGroup.controls['title']
  }
  get journalInput() : AbstractControl{
    return this.registrationFormGroup.controls['journal']
  }
  get textarea() : AbstractControl{
    return this.registrationFormGroup.controls['textarea']
  }

  save() {
    console.log(this.titleInput.value);
    console.log(this.journalInput.value);
    console.log(this.textarea.value);
  }

  
  buildRegistrationForm() {
    this.registrationFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      journal: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
    });
  }

}
