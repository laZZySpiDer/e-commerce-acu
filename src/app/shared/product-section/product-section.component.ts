import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule,IonIcon],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent {
  productList = [
    {
      productName : 'Animi Dolor Pariatur',
      productImage : '/imgs/product-1.jpg',
      productOnSale : true,
      salePercentage : '10%',
      originalPrice: '$19.00',
      discountedPrice: '$10.00',
      category: 'decoration',
      inStock: true
    },
    {
      productName : 'Art Deco Home',
      productImage : '/imgs/product-2.jpg',
      productOnSale : false,
      salePercentage : '',
      originalPrice: '$30.00',
      discountedPrice: '',
      category: 'accessory',
      inStock: false
    },
    {
      productName : 'Artificial potted plant',
      productImage : '/imgs/product-3.jpg',
      productOnSale : false,
      salePercentage : '',
      originalPrice: '$30.00',
      discountedPrice: '',
      category: 'decoration',
      inStock: true
    },
    {
      productName : 'Dark Green Jug',
      productImage : '/imgs/product-4.jpg',
      productOnSale : false,
      salePercentage : '',
      originalPrice: '$17.10',
      discountedPrice: '',
      category: 'accessory',
      inStock: true
    },
    {
      productName : 'Drinking Glasses',
      productImage : '/imgs/product-5.jpg',
      productOnSale : false,
      salePercentage : '',
      originalPrice: '$21.10',
      discountedPrice: '',
      category: 'accessory',
      inStock: true
    },
    {
      productName : 'Helen Chair',
      productImage : '/imgs/product-6.jpg',
      productOnSale : false,
      salePercentage : '',
      originalPrice: '$69.50',
      discountedPrice: '',
      category: 'furniture',
      inStock: true
    },
    {
      productName : 'High Quality Glass Bottle',
      productImage : '/imgs/product-7.jpg',
      productOnSale : false,
      salePercentage : '',
      originalPrice: '$30.10',
      discountedPrice: '',
      category: 'accessory',
      inStock: true
    },
    {
      productName : 'Living Room & Bedroom Lights',
      productImage : '/imgs/product-8.jpg',
      productOnSale : false,
      salePercentage : '',
      originalPrice: '$45.00',
      discountedPrice: '',
      category: 'accessory',
      inStock: true
    }
  ]
}
