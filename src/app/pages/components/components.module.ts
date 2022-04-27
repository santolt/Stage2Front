import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { JournalCardComponent } from './journal-card/journal-card.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FormComponent,
    FooterComponent,
    JournalCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FormComponent,
    FooterComponent,
    JournalCardComponent
  ]
})
export class ComponentsModule { }
