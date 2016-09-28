import { Component } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {
  public cartShown: boolean = false;
  toggleCart(){
    this.cartShown = !this.cartShown;
    console.log('toggling cart');
  }
}
