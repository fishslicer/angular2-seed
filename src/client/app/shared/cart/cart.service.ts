import {Injectable, EventEmitter} from '@angular/core';
import {Item} from '../../models/item.model';
import {HistoryService} from '../../guesser/history.service';
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx.js';

@Injectable()
export class CartService{
  public cart:Item[] = [];
  public cartChanged = new EventEmitter<Object>();
  //localStorage.setItem("user", authenticatedUser);
  constructor(public historyService: HistoryService){
    if(localStorage.getItem("cart")){
      this.cart = JSON.parse(localStorage.getItem("cart"));
    }
    else this.cart = [];
  }

  updateCart(){
    //console.log('cart size: ' + this.cart.length);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.cartChanged.emit(this.cart);
  }
  addItem(item:Item){
    console.log('adding: ' + item.name);
    this.cart.push(item);
    this.updateCart();

  }
  deleteItem(item:Item){
    //this.cart = this.cart.filter()
    this.updateCart();
  }
  checkout(){
    console.log('cart wiped');
    for(var i = 0; i < this.cart.length; i++){
      this.historyService.cartItemIncrement(this.cart[i]);
    }
    this.historyService.interestReducer('nil');
    this.historyService.updateHistory();
    this.cart = [];
    this.updateCart();
  }
  /*getCart(): Promise<Item[]> {
    return Promise.resolve(this.cart);
  }*/
  //if (localStorage.getItem("user") === null)
  getCart(): Item[]{
    //console.log('getting cart');
    //this.updateCart();
    //return localStorage.getItem("cart");
    //return  Promise.resolve(this.cart);
    return this.cart;
  }

  getCartEmitter(){
    return this.cartChanged;
  }

}
