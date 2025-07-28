"use client";

import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  
  useEffect(() => {
    const savedCount = localStorage.getItem("cart-count");
    if (savedCount !== null) {
      setCartCount(Number(savedCount));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("cart-count", cartCount.toString());
  }, [cartCount]);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
