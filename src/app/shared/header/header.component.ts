import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonIcon, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuItems = [
    {link: '#home', title : 'Home'},
    {link: '#about', title : 'About'},
    {link: '#products', title : 'Products'},
    {link: '#blogs', title: 'Blogs'}
  ]
  showSidebar: boolean = false;
  
  
  navToggle(change:'open'|'close'|'toggle'){
    this.showSidebar = change === 'close' ? false : !this.showSidebar;
  }

  goToSection(menuItem:any){
    this.navToggle('close');
    console.log('Go to Section/Page',menuItem.title);
  }
}
