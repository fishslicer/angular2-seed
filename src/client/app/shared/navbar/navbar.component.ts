import { Component, Output, EventEmitter } from '@angular/core';

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
  @Output() cartShownOut = new EventEmitter<boolean>();

  toggleCart(){
    this.cartShown = !this.cartShown;
    this.cartShownOut.emit(this.cartShown);
    console.log('toggling cart');
  }
}
