import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppiService } from '../../../services/appi.service';
import { Doc } from '../../../interfaces/journal.interfaces';
import { JOURNAL_IMAGES } from 'src/app/shared/constants/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  journal: Doc[] = [];
  JOURNAL_IMAGES = JOURNAL_IMAGES;
  apiSubcription: Subscription | undefined;
  registrationFormGroup!: FormGroup;

  constructor(
    private appiService: AppiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getApiData();
    this.buildRegistrationForm();
  }

  ngOnDestroy(): void {
    if (this.apiSubcription) {
      this.apiSubcription.unsubscribe();
    }
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

  getApiData() {
    this.apiSubcription = this.appiService.getAppi().subscribe((data) => {
      console.log(data);
      this.journal = data.response.docs;
    });
  }

  buildRegistrationForm() {
    this.registrationFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      journal: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
    });
  }
}
