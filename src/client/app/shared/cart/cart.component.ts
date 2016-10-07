import { Component, OnInit } from '@angular/core';
import { NameListService } from '../index';
import { CartService } from './cart.service';
import {Item} from '../../models/item.model';


@Component({
  moduleId: module.id,
  selector: 'sd-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  providers: [CartService]
})

export class CartComponent{
  public cart: Item[] = [];
  constructor(private cartService:CartService){
    console.log('getting cart from service');
    this.cart = cartService.getCart();
  }
  getCart(){
    return this.cartService.getCart();
  }
  checkout(){
    this.cartService.checkout();
  }
}
