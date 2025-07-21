import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // check if item already exists
    const exists = cartItems.find(item => item.id === product.id);

    if (!exists) {
      setCartItems(prev => [...prev, product]);
    } else {
      // Optionally alert user or do nothing
      console.log("Already in cart:", product.title);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
