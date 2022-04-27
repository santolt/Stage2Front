import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-card-modal',
  templateUrl: './edit-card-modal.component.html',
  styleUrls: ['./edit-card-modal.component.scss']
})

export class EditCardModalComponent implements OnInit {

  editCardJournal!: FormGroup

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildRegistrationForm();
  }

  buildRegistrationForm() {
    this.editCardJournal = this.formBuilder.group({
      title: ['', [Validators.required]],
      journal: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
    });
  }

}
