import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { IProduct } from './IProduct.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,IonIcon],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: IProduct;
}


