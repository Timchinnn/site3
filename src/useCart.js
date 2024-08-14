import { useState } from "react";
import { getTotalPrice } from "./utils";

const useCart = (tg) => {
  const [addedItems, setAddedItems] = useState([]);

  const updateMainButton = (items) => {
    if (items.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(items)}`,
      });
    }
  };

  const onAdd = (product) => {
    const existingItemIndex = addedItems.findIndex(
      (item) => item.id === product.id
    );
    let newItems = [...addedItems];

    if (existingItemIndex > -1) {
      newItems[existingItemIndex].quantity += 1;
    } else {
      newItems.push({ ...product, quantity: 1 });
    }

    setAddedItems(newItems);
    updateMainButton(newItems);
  };

  const onRemove = (product) => {
    const existingItemIndex = addedItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex > -1) {
      let newItems = [...addedItems];
      newItems[existingItemIndex].quantity -= 1;

      if (newItems[existingItemIndex].quantity <= 0) {
        newItems.splice(existingItemIndex, 1);
      }

      setAddedItems(newItems);
      updateMainButton(newItems);
    }
  };

  return { addedItems, onAdd, onRemove };
};

export default useCart;
