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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  journal: Doc[] = [];
  apiSubcription: Subscription | undefined;

  constructor(private appiService: AppiService) {}

  ngOnInit(): void {
    this.getApiData();
  }

  ngOnDestroy(): void {
    if (this.apiSubcription) {
      this.apiSubcription.unsubscribe();
    }
  }

  getApiData() {
    this.apiSubcription = this.appiService.getAppi().subscribe((data) => {
      console.log(data);
      this.journal = data.response.docs;
    });
  }
}
