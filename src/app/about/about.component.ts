import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  // Machinery & Infrastructure Data
  machineryData = [
    { srNo: 1, machineType: 'Corrugation Machine', size: '62"', qty: 1 },
    { srNo: 2, machineType: 'Pasting Machine', size: '85"', qty: 1 },
    { srNo: 3, machineType: 'Pasting Machine', size: '105"', qty: 1 },
    { srNo: 4, machineType: '4 Bar Rotary', size: '85"', qty: 1 },
    { srNo: 5, machineType: '4 Bar Rotary', size: '95"', qty: 1 },
    { srNo: 6, machineType: 'Eccentric Slotter', size: '85"', qty: 1 },
    { srNo: 7, machineType: 'Manual Stitching Machine', size: '48"', qty: 2 },
    { srNo: 8, machineType: 'Auto Stitching Machine', size: '2000 mm', qty: 1 },
    { srNo: 9, machineType: 'Punching Machine', size: '40" × 54"', qty: 1 },
    { srNo: 10, machineType: 'Manual Bundling Machine', size: '—', qty: 2 },
    { srNo: 11, machineType: 'Auto Bundling Machine', size: '—', qty: 1 },
    {
      srNo: 12,
      machineType: '2 Colour Printing with RS4 + Rotary Punch',
      size: '2200 mm × 1460 mm',
      qty: 1,
    },
  ];

  machineryColumns = ['srNo', 'machineType', 'size', 'qty'];

  // Testing Equipment Data
  testingEquipmentData = [
    { srNo: 1, machine: 'GSM Tester', qty: 1 },
    { srNo: 2, machine: 'Bursting Tester', qty: 1 },
    { srNo: 3, machine: 'Cobb Tester', qty: 1 },
    { srNo: 4, machine: 'Moisture Tester', qty: 1 },
    { srNo: 5, machine: 'RCT Tester', qty: 1 },
    { srNo: 6, machine: 'B4 Cup (for ink viscosity)', qty: 1 },
  ];

  testingColumns = ['srNo', 'machine', 'qty'];

  // Raw Material Sources/Vendors
  vendors = [
    'Gajanan Paper Mills – Mallapur',
    'Laxmi Board & Paper Mills Ltd – Kalyan (Mumbai)',
    'Shree Raj Rajeshwari Paper Chem Pvt Ltd – Sinnar',
    'Shri Ajit Pulp & Paper Ltd – Vapi',
    'Shri Devang Paper Mill Ltd – Vapi',
    'Shah Paper Mill – Vapi',
    'Best Paper Mill',
    'Unisource Paper Pvt Ltd – Nashik',
    'Paper Vintage – Bhiwandi (Mumbai)',
    'Dongargaon Paper Mills – Dongargaon (MP)',
    'Vishwa Paper Mill – Aurangabad',
    'Nice Paper Mills – Nagpur',
  ];

  // Company Details
  companyDetails = {
    proprietors: 'Kardile K. T – 9822275293 / Kardile D. T – 9850211045',
    pan: 'AJGPK2899G',
    gst: '27AJ4PK289941ZT',
    bank: 'Canara Bank – Koregaon Park Branch, Pune',
    turnover: [
      '₹ 4.70 Cr (2018–19)',
      '₹ 4.68 Cr (2019–20)',
      '₹ 4.65 Cr (2020–21)',
    ],
  };
}
