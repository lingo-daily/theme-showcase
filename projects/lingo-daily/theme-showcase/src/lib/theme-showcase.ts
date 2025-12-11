import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton, MatFabButton, MatMiniFabButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatInput, MatLabel} from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import {MatDivider} from '@angular/material/list';

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
    MatCardActions
  ],
  templateUrl: './theme-showcase.html',
  styleUrls: ['./theme-showcase.scss']
})
export class ThemeShowcaseComponent {
  // Add any logic if needed, e.g., indeterminate states for checkboxes
}
