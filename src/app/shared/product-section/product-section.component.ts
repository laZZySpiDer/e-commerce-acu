import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { IProduct } from '../../lib/product-card/IProduct.interface';
import { ProductCardComponent } from '../../lib/product-card/product-card.component';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule,IonIcon, ProductCardComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent {
  productList : IProduct[] = [
    {
      productId: '1',
      productName : 'Animi Dolor Pariatur',
      productImage : '/imgs/product-1.jpg',
      productOnSale : true,
      salePercentage : 10,
      originalPrice: 19.00,
      discountedPrice: 10.22,
      category: 'decoration',
      inStock: true
    },
    {
      productId: '2',
      productName : 'Art Deco Home',
      productImage : '/imgs/product-2.jpg',
      productOnSale : false,
      salePercentage : null,
      originalPrice: 30.00,
      discountedPrice: null,
      category: 'accessory',
      inStock: false
    },
    {
      productId: '3',
      productName : 'Artificial potted plant',
      productImage : '/imgs/product-3.jpg',
      productOnSale : false,
      salePercentage : null,
      originalPrice: 30.00,
      discountedPrice: null,
      category: 'decoration',
      inStock: true
    },
    {
      productId: '4',
      productName : 'Dark Green Jug',
      productImage : '/imgs/product-4.jpg',
      productOnSale : false,
      salePercentage : null,
      originalPrice: 17.10,
      discountedPrice: null,
      category: 'accessory',
      inStock: true
    },
    {
      productId: '5',
      productName : 'Drinking Glasses',
      productImage : '/imgs/product-5.jpg',
      productOnSale : false,
      salePercentage : null,
      originalPrice: 21.10,
      discountedPrice: null,
      category: 'accessory',
      inStock: true
    },
    {
      productId: '6',
      productName : 'Helen Chair',
      productImage : '/imgs/product-6.jpg',
      productOnSale : false,
      salePercentage : null,
      originalPrice: 69.50,
      discountedPrice: null,
      category: 'furniture',
      inStock: true
    },
    {
      productId: '7',
      productName : 'High Quality Glass Bottle',
      productImage : '/imgs/product-7.jpg',
      productOnSale : false,
      salePercentage : null,
      originalPrice: 30.10,
      discountedPrice: null,
      category: 'accessory',
      inStock: true
    },
    {
      productId: '8',
      productName : 'Living Room & Bedroom Lights',
      productImage : '/imgs/product-8.jpg',
      productOnSale : false,
      salePercentage : null,
      originalPrice: 45.00,
      discountedPrice: null,
      category: 'accessory',
      inStock: true
    }
  ]
}
