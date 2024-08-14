import { useState } from "react";
// import { getTotalPrice } from "./utils";

const useCart = (tg) => {
  const [addedItems, setAddedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateMainButton = (items) => {
    if (items.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(items)}`,
        onClick: () => openCartModal(), // Добавьте функцию открытия модального окна
      });
    }
  };

  const openCartModal = () => {
    setIsModalOpen(true);
  };

  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  const getTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const CartModal = () => {
    return (
      <div className={`modal ${isModalOpen ? "is-open" : ""}`}>
        <div className="modal-content">
          <h2>Ваша корзина</h2>
          {addedItems.length === 0 ? (
            <p>Корзина пуста.</p>
          ) : (
            <ul>
              {addedItems.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Цена: {item.price}₽</p>
                </li>
              ))}
            </ul>
          )}
          <button onClick={closeCartModal}>Закрыть</button>
        </div>
      </div>
    );
  };

  // добавьте здесь вашу логику для добавления и удаления товаров из addedItems

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

  return {
    addedItems,
    setAddedItems,
    onAdd,
    onRemove,
    updateMainButton,
    CartModal,
  };
};

export default useCart;
