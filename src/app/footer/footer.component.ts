import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  // Company information
  companyName = 'K B Packaging Industries';
  companyDescription = 'Industrial Packaging Solutions';

  // Contact information
  contactInfo = {
    address: '-',
    phone: '-',
    email: 'info@kbpi.co.in',
  };

  // Social media links
  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    // { name: 'Twitter', icon: 'twitter', url: '#' },
  ];

  // Quick links
  quickLinks = [
    { name: 'Home', url: '/home' },
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' },
  ];

  // Services
  services = [
    { name: 'Package Design', url: '/package-design' },
    { name: 'Production & Delivery', url: '/production' },
    { name: 'Equipment', url: '/equipment' },
  ];
}
