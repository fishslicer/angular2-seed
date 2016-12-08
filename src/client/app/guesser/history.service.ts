import {Injectable} from '@angular/core';
import {Item} from '../models/item.model';

@Injectable()
export class HistoryService{
  public history:
  {
    electronics: number,
    books: number,
    drugs: number,
    office_supplies: number,
    tools: number,
    movies: number,
    games: number
  };
  public reducer = 2;
  constructor(){
    if( localStorage.getItem("history"))
      this.history = JSON.parse(localStorage.getItem("history"));
    else {
      console.log('history const else');
      //if(this.history) {
        this.history = {};
        this.history.electronics = 0;
        this.history.books = 0;
        this.history.drugs = 0;
        this.history.office_supplies = 0;
        this.history.tools = 0;
        this.history.movies = 0;
        this.history.games = 0;
      //}
    }
  }
  updateHistory(){
    if(this.history) {
      console.log(this.history.electronics);
      localStorage.setItem("history", JSON.stringify(this.history));
    }
  }

  resetHistory(){
    this.history.electronics = 0;
    this.history.books = 0;
    this.history.drugs = 0;
    this.history.office_supplies = 0;
    this.history.tools = 0;
    this.history.movies = 0;
    this.history.games = 0;
    this.updateHistory();
  }
  getHistory(){
    return this.history;
  }
  cartItemIncrement(item: Item){
    var type = item.type;
    if(this.history) {
      switch (type) {
        case 'electronics':
          this.history.electronics += 10;
          break;
        case 'books':
          this.history.books += 10;
          break;
        case 'drugs':
          this.history.drugs += 10;
          break;
        case 'office supplies':
          this.history.office_supplies += 10;
          break;
        case 'tools':
          this.history.tools += 10;
          break;
        case 'movies':
          this.history.movies += 10;
          break;
        case 'games':
          this.history.games += 10;
          break;
        default:
      }
    }
    //this.updateHistory();
  }
  itemSelectIncrement(item: Item){
    var type = item.type;
    if(this.history) {
      switch (type) {
        case 'electronics':
          this.history.electronics += 1;
          break;
        case 'books':
          this.history.books += 1;
          break;
        case 'drugs':
          this.history.drugs += 1;
          break;
        case 'office supplies':
          this.history.office_supplies += 1;
          break;
        case 'tools':
          this.history.tools += 1;
          break;
        case 'movies':
          this.history.movies += 1;
          break;
        case 'games':
          this.history.games += 1;
          break;
        default:
      }
      this.interestReducer(type);
    }
  }
  interestReducer(type: string){
    switch (type) {
      case 'electronics':
        //this.history.electronics = this.history.electronics / this.reducer;
        this.history.books = this.history.books / this.reducer;
        this.history.drugs = this.history.drugs / this.reducer;
        this.history.office_supplies = this.history.office_supplies / this.reducer;
        this.history.tools = this.history.tools / this.reducer;
        this.history.movies = this.history.movies / this.reducer;
        this.history.games = this.history.games / this.reducer;
        break;
      case 'books':
        this.history.electronics = this.history.electronics / this.reducer;
        //this.history.books = this.history.books / this.reducer;
        this.history.drugs = this.history.drugs / this.reducer;
        this.history.office_supplies = this.history.office_supplies / this.reducer;
        this.history.tools = this.history.tools / this.reducer;
        this.history.movies = this.history.movies / this.reducer;
        this.history.games = this.history.games / this.reducer;
        break;
      case 'drugs':
        this.history.electronics = this.history.electronics / this.reducer;
        this.history.books = this.history.books / this.reducer;
        //this.history.drugs = this.history.drugs / this.reducer;
        this.history.office_supplies = this.history.office_supplies / this.reducer;
        this.history.tools = this.history.tools / this.reducer;
        this.history.movies = this.history.movies / this.reducer;
        this.history.games = this.history.games / this.reducer;
        break;
      case 'office supplies':
        this.history.electronics = this.history.electronics / this.reducer;
        this.history.books = this.history.books / this.reducer;
        this.history.drugs = this.history.drugs / this.reducer;
        //this.history.office_supplies = this.history.office_supplies / this.reducer;
        this.history.tools = this.history.tools / this.reducer;
        this.history.movies = this.history.movies / this.reducer;
        this.history.games = this.history.games / this.reducer;
        break;
      case 'tools':
        this.history.electronics = this.history.electronics / this.reducer;
        this.history.books = this.history.books / this.reducer;
        this.history.drugs = this.history.drugs / this.reducer;
        this.history.office_supplies = this.history.office_supplies / this.reducer;
        //this.history.tools = this.history.tools / this.reducer;
        this.history.movies = this.history.movies / this.reducer;
        this.history.games = this.history.games / this.reducer;
        break;
      case 'movies':
        this.history.electronics = this.history.electronics / this.reducer;
        this.history.books = this.history.books / this.reducer;
        this.history.drugs = this.history.drugs / this.reducer;
        this.history.office_supplies = this.history.office_supplies / this.reducer;
        this.history.tools = this.history.tools / this.reducer;
        //this.history.movies = this.history.movies / this.reducer;
        this.history.games = this.history.games / this.reducer;
        break;
      case 'games':
        this.history.electronics = this.history.electronics / this.reducer;
        this.history.books = this.history.books / this.reducer;
        this.history.drugs = this.history.drugs / this.reducer;
        this.history.office_supplies = this.history.office_supplies / this.reducer;
        this.history.tools = this.history.tools / this.reducer;
        this.history.movies = this.history.movies / this.reducer;
        //this.history.games = this.history.games / this.reducer;
        break;
      default:
        this.history.electronics = this.history.electronics / this.reducer;
        this.history.books = this.history.books / this.reducer;
        this.history.drugs = this.history.drugs / this.reducer;
        this.history.office_supplies = this.history.office_supplies / this.reducer;
        this.history.tools = this.history.tools / this.reducer;
        this.history.movies = this.history.movies / this.reducer;
        this.history.games = this.history.games / this.reducer;
    }
  }


}
