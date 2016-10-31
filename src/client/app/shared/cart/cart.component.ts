import {Component, OnInit, ReflectiveInjector} from '@angular/core';
import { NameListService } from '../index';
import { CartService } from './cart.service';
import {Item} from '../../models/item.model';


@Component({
  moduleId: module.id,
  selector: 'sd-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})

export class CartComponent implements OnInit{
  public cart: Item[];
  public subscription: any;
  constructor(private cartService:CartService){
    //this.cartService.getCart().then(cart => this.cart = cart);
    this.cart = this.cartService.getCart();
    if (!this.cart)
      console.log('error getting cart');
    else console.log(this.cart.length + ' got cart');
  }
  //lol
  ngOnInit(){
    /*this.cartService.getCart()
      .subscribe(cart => this.getCartService());*/
    /*this.cartService.getCart()
      .subscribe(
        cart => this.cart = cart,
        error =>  this.errorMessage = <any>error
      );*/
  }
  /*getCartService(){
    console.log('getCartService()');
    return this.cart;
  }*/
  checkout(){
    this.cartService.checkout();
  }
}
