import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    CommonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
})
export class SharedModule {}
