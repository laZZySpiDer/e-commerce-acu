import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [CommonModule,IonIcon],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss'
})
export class BlogSectionComponent {
  blogList = [
    {
      blogTitle: 'Unique products that will impress your home in 2022.',
      blogLink: '#',
      blogImageLink: '/imgs/blog-1.jpg',
      blogPublishedDate: 'September 2, 2024',
      blogPublishedBy: 'Aditya',
      blogCategory: 'Decoration'
    },
    {
      blogTitle: 'Navy Blue & White Striped Area Rugs',
      blogLink: '#',
      blogImageLink: '/imgs/blog-2.jpg',
      blogPublishedDate: 'September 2, 2024',
      blogPublishedBy: 'Aditya',
      blogCategory: 'Decoration'
    },
    {
      blogTitle: 'Woodex White Coated Staircase Floating',
      blogLink: '#',
      blogImageLink: '/imgs/blog-3.jpg',
      blogPublishedDate: 'September 2, 2024',
      blogPublishedBy: 'Aditya',
      blogCategory: 'Decoration'
    }
  ]
}
