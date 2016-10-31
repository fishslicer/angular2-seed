import {Injectable, EventEmitter} from '@angular/core';
import {Item} from '../../models/item.model';
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx.js';

@Injectable()
export class CartService{
  public cart:Item[] = [];
  //localStorage.setItem("user", authenticatedUser);
  constructor(){
    /*if(localStorage.getItem("cart") != null)
      this.cart = localStorage.getItem("cart");
    else this.cart = [];*/
  }

  updateCart(){
    console.log('cart size: ' + this.cart.length);
    localStorage.setItem("cart", this.cart);
  }
  addItem(item:Item){
    this.cart.push(item);
    this.updateCart();
    /*console.log('adding: ' + item.name);
    if(this.cart.push(item))
      console.log('success: ' + this.cart.length);
    this.getCart();*/
  }
  deleteItem(item:Item){
    //this.cart = this.cart.filter()
    this.updateCart();
  }
  checkout(){
    console.log('cart wiped');
    this.cart = [];
    this.updateCart();
  }
  /*getCart(): Promise<Item[]> {
    return Promise.resolve(this.cart);
  }*/
  //if (localStorage.getItem("user") === null)
  getCart(): Item[]{
    console.log('getting cart');
    this.updateCart();
    //return localStorage.getItem("cart");
    //return  Promise.resolve(this.cart);
    return this.cart;
  }

/*  public data: Observable<Array<Item>>;
  public cart: Array<Item>;


  //constructor(cart = []){}
  constructor(){}
  OnInit(){
    this.cart = new Observable(observer =>{

    })
  }
  let subscription = this.data.subscribe(
    (value) => this.cart.push(value)
);*/
  /*addItem(item:Item){
    console.log('adding: ' + item.name);
    if(this.cart.push(item))
      console.log('success: ' + this.cart.length);
    this.getCart();
  }

  /!*get(): Observable<string[]> {
    return this.http.get('/assets/inventory.json')
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }*!/
  deleteItem(item:Item){
    //this.cart = this.cart.filter()
  }
  checkout(){
    console.log('cart wiped');
    this.cart = [];
  }
  getCart():Observable<Item[]>{
    //console.log('in getCart()');
    //if(this.cart)
      //console.log(this.cart);
    console.log(this.cart.length);
    /!*for (var item of this.cart){
      console.log(item.name);
    }*!/
    return this.cart;
  }
  getCartEmitter(){

  }*/
}
