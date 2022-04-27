import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppiService } from '../../services/appi.service';
import { Doc } from '../../interfaces/journal.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
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
