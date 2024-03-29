import { Product } from ".";

export interface ProductInCart extends Product {
  count: number;
}

export interface ShoppingCart {
  [key: string]: ProductInCart;
}
