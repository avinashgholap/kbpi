import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
})
export class ContactModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(): void {
    if (this.data.form.valid) {
      this.dialogRef.close(true);
    }
  }
}
