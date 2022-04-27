import { Component, Input, OnInit } from '@angular/core';
import { Journal } from 'src/app/interfaces/journal.interfaces';

@Component({
  selector: 'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls: ['./journal-card.component.scss']
})
export class JournalCardComponent  {

  @Input() journal: Journal | undefined;



}
