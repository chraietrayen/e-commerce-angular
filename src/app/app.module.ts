import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routes } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module'
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule ,
    CartComponent
  ],
  providers: []
})
export class AppModule { }
