import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCardModalComponent } from './edit-card-modal/edit-card-modal.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditCardModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    EditCardModalComponent
  ]
})
export class ModalsModule { }
