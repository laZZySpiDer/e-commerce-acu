import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { IonIcon } from '@ionic/angular/standalone';
import { WINDOW } from './utils/window';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    IonIcon,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.window.scrollY > 100) {
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
  }
  constructor(@Inject(WINDOW) private window: Window) {}
  title = 'e-commerce-acu';
  showScrollToTop: boolean = false;
}
