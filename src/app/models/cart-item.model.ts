export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string; 
}

export interface Product extends Omit<CartItem, 'quantity'> {
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  stock: number;
  rating: number;
  discount: number;
  additionalImages: string[]; 
}
