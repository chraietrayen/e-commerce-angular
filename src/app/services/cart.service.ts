import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addToCart(item: CartItem): void {
    const items = [...this.cartItemsSubject.value, item];
    this.cartItemsSubject.next(items);
  }

  removeFromCart(itemId: number): void {
    const items = this.cartItemsSubject.value.filter(item => item.id !== itemId);
    this.cartItemsSubject.next(items);
  }

  getTotal(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout(): void {
    console.log('Proceeding to checkout');
    this.cartItemsSubject.next([]); 
    alert('Checkout successful!'); 
  }
}
