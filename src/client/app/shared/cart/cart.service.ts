import {Injectable, EventEmitter} from '@angular/core';
import {Item} from '../../models/item.model';
import {HistoryService} from '../../guesser/history.service';
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx.js';

@Injectable()
export class CartService{
  public cart:Item[] = [];
  public orderList: string[];
  public price: number;
  public cartChanged = new EventEmitter<Object>();
  //localStorage.setItem("user", authenticatedUser);
  constructor(public historyService: HistoryService){
    if(localStorage.getItem("cart")){
      this.cart = JSON.parse(localStorage.getItem("cart"));

    }
    else this.cart = [];
    if(localStorage.getItem("orderList")){
      this.orderList = JSON.parse(localStorage.getItem("orderList"));
    }
    else this.orderList = [];
  }

  updateCart(){
    //console.log('cart size: ' + this.cart.length);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.price = 0;
    if(this.cart) {
      for (var i = 0; i < this.cart.length; i++) {
        this.price += this.cart[i].price;
      }
    }
    this.cartChanged.emit(this.cart);
  }
  addItem(item:Item){
    console.log('adding: ' + item.name);
    this.cart.push(item);
    this.updateCart();

  }
  deleteItem(item:Item){
    this.cart = this.cart.filter(function(i) {return i.id !== item.id} );
    this.updateCart();
  }
  checkout(){
    if(this.totalPrice() > 0) {
      var order: string = '';
      console.log('cart wiped');
      order = order + '-|<OrderID: ' + Math.floor(Math.random() * 999999 + 100000);
      for (var i = 0; i < this.cart.length; i++) {
        this.historyService.cartItemIncrement(this.cart[i]);
        order = order + ' ,[ ' + this.cart[i].name + ' id: (' + this.cart[i].id + ')]';
      }
      order = order + " - Total: $" + this.totalPrice() + '>|-';
      this.orderList.push(order);
      localStorage.setItem("orderList", JSON.stringify(this.orderList));
      this.historyService.interestReducer('nil');
      this.historyService.updateHistory();
      this.cart = [];
      this.updateCart();
    }
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
  totalPrice(){
    return this.price;
  }
  getOrderList(){
    return this.orderList
  }
  clearOrderList(){
    this.orderList = [];
    localStorage.setItem("orderList", JSON.stringify(this.orderList));
  }

}
