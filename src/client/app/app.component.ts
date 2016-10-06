import {Component, Input, ElementRef} from '@angular/core';
import { Config} from './shared/index';
import { NavbarComponent } from './shared/navbar/navbar.component';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  //private navbarComp = NavbarComponent;
  cartStatus: boolean;
  constructor(private elementRef: ElementRef) {
    console.log('Environment config', Config);

  }

  cartShownOut(passedBool: boolean){
    this.cartStatus = passedBool;
    //console.log('cartShownOut');
  }
  getCartStatus(){
    return this.cartStatus;
  }
}
