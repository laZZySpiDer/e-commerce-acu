import { Component } from '@angular/core';
import { HeroSectionComponent } from "../shared/hero-section/hero-section.component";
import { ProductSectionComponent } from "../shared/product-section/product-section.component";
import { BlogSectionComponent } from "../shared/blog-section/blog-section.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, ProductSectionComponent, BlogSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
