import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]  
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,12}$/)]],
      address: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  submitOrder(): void {
    if (this.checkoutForm.valid) {
      console.log('Order Submitted', this.checkoutForm.value);
      alert('Order Submitted Successfully!');
     
    }
  }
}
