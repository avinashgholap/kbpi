import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  data;
  constructor(private sanitizer: DomSanitizer) {
    this.data = {
      name: 'K B Industries',
      email: 'kbindustries2008@yahoo.in',
      address:
        'Gat no 145/1, Plot No 16,17 Sanaswadi, Opp. Indian Petrol Pump,Pune Nagar Road, Tall. - Shirur, Dist. - Pune 412 208 . Maharashtra India',
      contact: '+91-9822275293 / +91-9850211045',
      location: this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.234567890123!2d74.0965483!3d18.6728988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2da6cbc521351%3A0x875c5e102d9f33d0!2sGat%20No-154%2F1%20Plot%20No16%2C17%20Opposite%20India%20Petrol%20pump%2C%20Sanaswadi%2C%20Pune-Nagar%20Road%2C%20Tal-Shirur%2C%20Dist-Pune.%20412208!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
      ),
    };
  }
}
