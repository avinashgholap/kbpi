import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HomeComponent,
    FooterComponent,
    ContactComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() title: string = '';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  log() {}
  home() {}
  logout() {}
  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
  closeSidenav() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
