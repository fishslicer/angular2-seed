import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CartService } from './shared/cart/cart.service';


import {LoginModule} from './shared/login/login.module';
import {PrivateModule} from './shared/login/private.module';

import {Search} from "./home/search.pipe";

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, SharedModule.forRoot(), Ng2BootstrapModule, LoginModule, PrivateModule],
  declarations: [AppComponent, Search],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, CartService],
  bootstrap: [AppComponent]

})

export class AppModule { }
