import { Component } from '@angular/core';
import {AuthenticationService} from '../shared/login/authentication.service';
import {CartService} from '../shared/cart/cart.service';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  //public aboutOrderList: string[] = [];
  constructor(public authenticationService: AuthenticationService, public cartService: CartService){

  }
  getUserInfo(){
    return this.authenticationService.getUser();
  }
  getOrderList(){
    return this.cartService.getOrderList();
  }
  clearOrderList(){
    this.cartService.clearOrderList();
  }
}
