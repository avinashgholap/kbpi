import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../service/app.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  contactInfo;
  constructor(private appService: AppService) {
    this.contactInfo = this.appService.data;
  }
  currentYear = new Date().getFullYear();

  // Company information
  companyName = 'K B Packaging Industries';
  companyDescription = 'Industrial Packaging Solutions';

  // Contact information

  // Social media links
  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    // { name: 'Twitter', icon: 'twitter', url: '#' },
  ];

  // Quick links
  quickLinks = [
    { name: 'Home', url: '/home' },
    { name: 'Products', url: '/products' },
    { name: 'About Us', url: '/about' },
    { name: 'Contact Us', url: '/contact' },
  ];

  // Services
  services = [
    { name: 'Package Design', url: '/package-design' },
    { name: 'Production & Delivery', url: '/production' },
    { name: 'Equipment', url: '/equipment' },
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
