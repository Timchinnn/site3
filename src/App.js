import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Для стилей, создайте этот файл
import ProductModal from "./components/ProductModal/ProductModal";
import { useTelegram } from "./hooks/useTelegram";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.description * item.quantity); // Используйте item.price вместо item.description для расчета стоимости
  }, 0);
};

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tg } = useTelegram();
  const [addedItems, setAddedItems] = useState([]);

  const fetchProducts = () => {
    axios
      .get("/api/products") // Теперь будет направляться на ваш сервер
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении товаров:", error);
      });
  };

  useEffect(() => {
    fetchProducts(); // Получаем товары при первом рендере

    // Устанавливаем интервал для обновления данных
    const intervalId = setInterval(() => {
      fetchProducts(); // Обновляем данные каждые 5 секунд
    }, 5000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const onAdd = (product) => {
    const existingItemIndex = addedItems.findIndex(
      (item) => item.id === product.id
    );

    let newItems = [...addedItems];

    if (existingItemIndex > -1) {
      // Если товар уже есть в корзине, увеличиваем его количество
      newItems[existingItemIndex].quantity += 1;
    } else {
      // Если товара еще нет, добавляем его
      newItems.push({ ...product, quantity: 1 });
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Магазин товаров</h1>
      <div className="products">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => openModal(product)}
          >
            <div className="product-image">
              <img src={product.photo_url} alt={product.name} />
            </div>
            <div className="product-title">{product.name}</div>

            <div className="product-price-add">
              <div className="product-price">{product.description}</div>
              <button
                className="add-to-cart"
                onClick={(e) => {
                  e.stopPropagation(); // Предотвращаем событие клика от пациента вверх
                  onAdd(product); // Вызываем функцию добавления товара в корзину
                }}
              >
                +
              </button>
            </div>
          </div>
          // <div
          //   key={product.id}
          //   className="product"
          //   onClick={() => openModal(product)}
          // >
          //   <img src={product.photo_url} alt={product.name} />
          //   <h2>{product.name}</h2>
          //   <p>{product.description}</p>
          // </div>
        ))}
      </div>

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
