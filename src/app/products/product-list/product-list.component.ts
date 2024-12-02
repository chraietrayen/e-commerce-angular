import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem, Product } from '../../models/cart-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: "Women's Accessories",
      description: "Slim fit casual shirt, perfect for office and outings.",
      category: "women",
      subcategory: "Fashion Accessories",
      price: 150,
      imageUrl: "assets/images/assecoire femme/article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "White", "Black"],
      stock: 50,
      rating: 4.5,
      discount: 20,
      additionalImages: [
   
      ]
    },
    {
      id: 2,
      name: "Men Accessories",
      description: "Perfect blend of style and functionality",
      category: "men",
      subcategory: "Men's Classic Wristwatch",
      price: 2999,
      imageUrl: "assets/images/assecoire homme/watch article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
     
      ]
    },
    {
      id: 3,
      name: "Women's casual",
      description: "Elegant women's dress for various occasions.",
      category: "women",
      subcategory: "casual",
      price: 500,
      imageUrl: "assets/images/costume femme/costume femme article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 15,
      rating: 4,
      discount: 10,
      additionalImages: [
       
      ]
    },
    {
      id: 4,
      name: "men's casual",
      description: "Elegant men's dress for various occasions.",
      category: "men",
      subcategory: "casual",
      price: 500,
      imageUrl: "assets/images/costume homme/costume article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        
      ]
    },
    {
      id: 5,
      name: "kids dress",
      description: "Elegant kids dress for various occasions.",
      category: "kids",
      subcategory: "casual",
      price: 500,
      imageUrl: "assets/images/dress girl/dress girl.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
      
      ]
    },
    {
      id: 6,
      name: "women shoes",
      description: "Elegant women's shoes for various occasions.",
      category: "women",
      subcategory: "shoes",
      price: 500,
      imageUrl: "assets/images/shoes femme/shoes femme artucle.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
     
      ]
    },
    {
      id: 7,
      name: "men's shoes",
      description: "Elegant men's shoes for various occasions.",
      category: "men",
      subcategory: "shoes",
      price: 500,
      imageUrl: "assets/images/shoes homme/shoes homme article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
       
      ]
    },
    {
      id: 8,
      name: "women's jean",
      description: "Elegant wonen's jean for various occasions.",
      category: "women",
      subcategory: "jean",
      price: 75,
      imageUrl: "assets/images/srawel femme/jean article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
  
      ]
    },
    {
      id: 9,
      name: "men's jean",
      description: "Elegant men's jean for various occasions.",
      category: "men",
      subcategory: "jean",
      price: 500,
      imageUrl: "assets/images/srawel homme/jean article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
     
      ]
    },
    {
      id: 10,
      name: "women's t-shirt",
      description: "Elegant women's t-shirtfor various occasions.",
      category: "women",
      subcategory: "t-shirt",
      price: 500,
      imageUrl: "assets/images/t shirt femme/t shirt femme article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
     
      ]
    },
    {
      id: 11,
      name: "men's t-shirt",
      description: "Elegant men's t-shirt for various occasions.",
      category: "men",
      subcategory: "t-shirt",
      price: 500,
      imageUrl: "assets/images/t shirt homme/t shirt homme article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
      
      ]
    },
    {
      id: 12,
      name: "women's dress",
      description: "Elegant women's dress for various occasions.",
      category: "women",
      subcategory: "dress",
      price: 89.5,
      imageUrl: "assets/images/dress women/modele.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 20,
      rating: 4.2,
      discount: 10,
      additionalImages: [
       
      ]
    },
    {
      id: 13,
      name: "men's sport",
      description: "Elegant men's sport for various occasions.",
      category: "men",
      subcategory: "sport",
      price: 56,
      imageUrl: "assets/images/sport man/modele.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 3.5,
      discount: 25,
      additionalImages: [
       
      ]
    },
    {
      id: 14,
      name: "kids outfit",
      description: "Elegant kids outfit for various occasions.",
      category: "kids",
      subcategory: "outfit",
      price: 500,
      imageUrl: "assets/images/full baby/article baby.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
       
      ]
    },
    {
      id: 15,
      name: "kids summer",
      description: "Elegant kids summer for various occasions.",
      category: "kids",
      subcategory: "kids summer",
      price: 500,
      imageUrl: "assets/images/kids boy/bleu off.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
       
      ]
    },
    {
      id: 16,
      name: "kids sport",
      description: "Elegant kids sport for various occasions.",
      category: "kids",
      subcategory: "kids sport",
      price: 500,
      imageUrl: "assets/images/kids boy vert/boy v.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
       
      ]
    },
    {
      id: 17,
      name: "kids",
      description: "Elegant kids  for various occasions.",
      category: "kids",
      subcategory: "kids",
      price: 500,
      imageUrl: "assets/images/kids/kid.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
       
      ]
    },
    {
      id: 18,
      name: "kids casual",
      description: "Elegant kids casual for various occasions.",
      category: "kids",
      subcategory: "casual",
      price: 500,
      imageUrl: "assets/images/casual baby/article.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Green", "Black"],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
       
      ]
    },
   
    
   
  ];

  filteredProducts: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  filterProducts(category: string): void {
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
  }

  addToCart(productId: number): void {
    const product = this.filteredProducts.find(p => p.id === productId);
    if (product) {
      this.cartService.addToCart({ ...product, quantity: 1 });
      console.log(`Product ${productId} added to cart`);
    }
  }
}
