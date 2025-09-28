import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ContactModalComponent } from '../contact/contact-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  contactForm: FormGroup;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {
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
        // Form was submitted successfully
        console.log('Form submitted:', this.contactForm.value);
        // Reset form after successful submission
        this.contactForm.reset();
      }
    });
  }
}
