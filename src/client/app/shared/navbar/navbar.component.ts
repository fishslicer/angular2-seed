import { Component, Output, EventEmitter } from '@angular/core';
import {AuthenticationService, User} from '../login/authentication.service';
/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  providers: [AuthenticationService]
})

export class NavbarComponent {
  public cartShown: boolean = false;
  @Output() cartShownOut = new EventEmitter<boolean>();


  constructor(
    private _service:AuthenticationService){}

  checkCredentials(){
    return this._service.checkCredentials();
  }
  logout(){
    return this._service.logout();
  }

  toggleCart(){
    this.cartShown = !this.cartShown;
    this.cartShownOut.emit(this.cartShown);
    //console.log('toggling cart');
  }
}
