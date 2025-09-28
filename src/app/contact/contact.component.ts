import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactModalComponent } from './contact-modal.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^[\+]?[1-9][\d]{0,15}$/)],
      ],
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  openContactModal(): void {
    const dialogRef = this.dialog.open(ContactModalComponent, {
      width: '90vw',
      maxWidth: '600px',
      maxHeight: '90vh',
      data: { form: this.contactForm },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onSubmit();
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.contactForm.value);

      this.snackBar.open(
        'Thank you for contacting us! We will get back to you soon.',
        'Close',
        {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }
      );

      // Reset form after successful submission
      this.contactForm.reset();
    } else {
      this.snackBar.open(
        'Please fill in all required fields correctly.',
        'Close',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }
      );
    }
  }
}
