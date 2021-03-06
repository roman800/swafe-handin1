import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ControlErrorPipe } from './control-error.pipe';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ControlErrorPipe, HoverHighlightDirective],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule,
    ControlErrorPipe,
    HoverHighlightDirective,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
