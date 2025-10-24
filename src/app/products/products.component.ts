import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
})
export class ProductsComponent {
  products = [
    {
      heading: 'REGULAR SLOTTED BOXES(UNIVERSAL)',
      image: 'corugated-box.png',
      description:
        'The Regular Slotted Container (RSC) corrugated box is one of the most widely used and versatile types of shipping containers. Manufactured with precision, these boxes are highly appreciated for their exceptional tear resistance, ample storage capacity, and superior surface strength. Designed to provide reliable protection during transit and storage, they are ideal for packaging a wide range of products with durability and efficiency.',
    },
    {
      heading: 'Fully Overlap Slotted Box',
      image: 'overlap.png',
      description:
        'The Fully Overlap Slotted Container (FOL) is a premium corrugated box designed for superior strength and protection. With all flaps of equal depth that completely overlap when closed, this design offers maximum stacking strength and enhanced resistance to rough handling. Perfect for heavy, delicate, or high-value products, FOL boxes ensure your goods remain safe during transit and storage. Available in custom sizes, styles, and designs, these boxes can be tailored to meet your exact packaging needs while maintaining durability and a professional appearance.',
    },
    {
      heading: 'Half Universal with Top Cover Slotted Box',
      image: 'half-slotted-cover.png',
      description:
        'Half Universal with Top Cover Slotted Box is a durable corrugated packaging solution featuring flaps on one side and a separate top cover for added protection. This design allows for easy packing and unpacking, making it ideal for batteries, washing machines, refrigerators, and other heavy or bulky items. Engineered for strength and stability, these boxes offer excellent protection during storage and transportation. Available in custom sizes, styles, and designs, they can be tailored to meet your exact packaging and branding requirements.',
    },
    {
      heading: 'Self Locking Box',
      image: 'self-locking.png',
      description:
        'The Self Locking Corrugated Box is a smart and convenient packaging solution designed for quick assembly without the need for tape or glue. Crafted from high-quality corrugated material, these boxes provide excellent strength, durability, and product protection. Ideal for e-commerce, retail, and industrial packaging, they offer a secure locking mechanism that keeps contents safe during handling and transit. Available in custom sizes, shapes, and prints, our self-locking boxes combine functionality with a clean, professional look for your brand.',
    },
    {
      heading: 'Punching Corrugated Box',
      image: 'punched-box.png',
      description:
        'The Punching Corrugated Box is a premium-quality packaging solution designed with precision die-cut shapes to meet diverse product requirements. Manufactured using high-grade corrugated sheets, these boxes offer excellent strength, durability, and a perfect fit for customized packaging needs. Ideal for automotive parts, electronics, food packaging, and retail products, punching boxes provide a clean, professional finish and ensure maximum protection during storage and transport. Available in custom sizes, shapes, and designs, they can be tailored to enhance your product presentation and brand appeal.',
    },
    {
      heading: 'CORRUGATED BOX PARTITION',
      image: 'partition.png',
      description:
        'We manufacture and supply a wide range of corrugated box partitions, designed to provide optimal protection and organization for various products. These partitions are aesthetically crafted to meet the diverse requirements of automotive parts, finished goods, articles, glass items, and more, ensuring safe storage and transport while maintaining a neat and professional presentation.',
    },
    {
      heading: 'Corrugated Special Die-Cut Pigeon Partitions',
      image: 'die-cut.png',
      description:
        'Corrugated Special Die-Cut Pigeon Partitions are engineered to meet your exact packaging needs. Designed according to customer specifications, these partitions provide precise compartments for small and delicate components, ensuring maximum protection and organized storage. Ideal for armatures, dynamos, and other small parts, they help prevent damage during transit while maintaining a professional and efficient presentation of your products.',
    },
    {
      heading: 'CORRUGATED 2PLY ROLLS',
      image: '2-ply-roll.png',
      description:
        'We provide a premium range of 2-ply corrugated rolls, crafted for versatile and reliable packaging solutions. Perfect for packing and wrapping, these rolls also serve as cushioning material, offering side support and extra protection to safeguard your products during transit. Durable, flexible, and easy to use, they ensure your items arrive safe and well-presented every time.',
    },
    {
      heading: 'Corrugated Angle Corner',
      image: 'angle-corner.png',
      description:
        'Corrugated Angle Corners are specially designed for use in construction and packaging applications, providing extra strength and protection for corners. Made from high-quality corrugated material, they help maintain the structural integrity of your products or projects. Available in a wide range of sizes and offered at competitive market prices, these angle corners are the perfect choice for reliable and cost-effective solutions.',
    },
  ];
}
