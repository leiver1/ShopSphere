"use client";

import { Product } from "@/types/ProductType";
import { ReactNode, createContext, useContext, useState } from "react";

export interface CartItem {
  product: Product;
  amount: number;
  price: number;
}

interface CartContextItem {
  cartItem: CartItem[];
  addCartItem: (cartItem: CartItem) => void;
  removeCartItem: (index: number[]) => void;
}

const CartContext = createContext<CartContextItem | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItem, setCartItem] = useState<CartItem[]>(() => {
    const cart = JSON.parse(localStorage.getItem("cart") as string);
    if (!cart) {
      return [];
    }
    return cart;
  });

  const addCartItem = (cartItem: CartItem) => {
    setCartItem((prev) => {
      const copyedArray = [...prev];
      copyedArray.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(copyedArray));
      return copyedArray;
    });
  };
  const removeCartItem = (index: number[]) => {
    for (const i of index) {
      setCartItem((prev) => {
        const copiedArray = [...prev];
        copiedArray.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(copiedArray));
        return copiedArray;
      });
    }
  };

  return (
    <CartContext.Provider value={{ cartItem, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("REEEEE NOOO ORder context");
  }

  return context;
};
