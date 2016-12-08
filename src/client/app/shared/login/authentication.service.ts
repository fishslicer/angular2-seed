import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public email: string,
    public name: string,
    public password: string) { }
}

var users = [
  new User('admin@admin.com','admin','admin'),
  new User('user1@gmail.com','bobby','user1')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['']);
  }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser){
      localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['']);
      return true;
    }
    return false;

  }

  checkCredentials( ){
    //console.log(localStorage.getItem("user") === null);
    if (localStorage.getItem("user") === null){
      //this._router.navigate(['login']);
      //console.log('true');
      return false;
    }
    else return true;
  }

  getUser(){
    //console.log(localStorage.getItem("user").name);
    return JSON.stringify(localStorage.getItem("user"));
  }
}
