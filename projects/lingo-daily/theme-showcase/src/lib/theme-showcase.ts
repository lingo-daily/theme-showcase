import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButton, MatButtonAppearance, MatFabButton, MatMiniFabButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatHint, MatInput, MatLabel} from '@angular/material/input';
import {MatFormField} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatDivider} from '@angular/material/list';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'ldpk-theme-showcase', // ld for lingo-daily
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatCard,
    MatInput,
    MatFormField,
    MatIcon,
    MatCheckbox,
    MatProgressBar,
    MatChipsModule,
    MatFabButton,
    MatMiniFabButton,
    MatDivider,
    MatLabel,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatHint,
    FormsModule
  ],
  templateUrl: './theme-showcase.html',
  styleUrls: ['./theme-showcase.scss']
})
export class ThemeShowcaseComponent {
  private snackbar = inject(MatSnackBar);
  formClass = '';
  buttonColors = ['', 'primary', 'secondary', 'tertiary', 'accent', 'warn' ];
  buttonClasses = ['primary', 'accent', 'warn'] ;
  protected readonly buttonAppearances:  MatButtonAppearance[] = ['text','filled','elevated' ,'outlined' ,'tonal'];

  addButtonClass() {
    this.buttonClasses = [...this.buttonClasses, 'your-button-class'];
  }

  openSnackbar(message: string, sbClass = '') {
    this.snackbar.open(message, '×',  {panelClass: sbClass});
  }
}
