import {Component, Input, ElementRef} from '@angular/core';
import { Config} from './shared/index';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {LoginComponent} from './shared/login/login.component';
import {PrivateComponent} from './shared/login/private.component';
import {AuthenticationService} from './shared/login/authentication.service';
import { CartService } from './shared/cart/cart.service';


/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  providers: [AuthenticationService, CartService]
})

export class AppComponent {
  //private navbarComp = NavbarComponent;
  cartStatus: boolean;
  constructor(private elementRef: ElementRef, private _service:AuthenticationService) {
    console.log('Environment config', Config);

  }

  cartShownOut(passedBool: boolean){
    this.cartStatus = passedBool;
    //console.log('cartShownOut');
  }
  getCartStatus(){
    return this.cartStatus;
  }
  getUser(){
    return this._service.getUser();
  }
  checkCredentials(){
    return this._service.checkCredentials();
  }

}

/*
constructor(
  private _service:AuthenticationService){}

ngOnInit(){
  this._service.checkCredentials();
}
*/
