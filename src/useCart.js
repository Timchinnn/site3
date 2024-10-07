import { useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== product.id);
      }
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };
  const removeAll = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    removeAll,
  };
};

export default useCart;
