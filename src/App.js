import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ProductModal from "./components/ProductModal/ProductModal";
import { useTelegram } from "./hooks/useTelegram";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "./ProductModal"; // Предполагаем, что у вас есть компонент ProductModal
import { useTelegram } from "./useTelegram"; // Предполагаем, что у вас уже есть эта функция

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.description * item.quantity);
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
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении товаров:", error);
      });
  };

  useEffect(() => {
    fetchProducts();
    const intervalId = setInterval(() => {
      fetchProducts();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
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
        {products.map((product) => {
          const addedItem = addedItems.find((item) => item.id === product.id);
          const quantity = addedItem ? addedItem.quantity : 0;

          return (
            <div
              className={`product-card ${quantity > 0 ? "highlight" : ""}`}
              key={product.id}
              onClick={() => openModal(product)}
            >
              <div className="product-image">
                <img src={product.photo_url} alt={product.name} />
                {quantity > 0 && (
                  <div className="quantity-overlay">{quantity}</div>
                )}
              </div>
              <div className="product-title">{product.name}</div>
              <div className="product-price-add">
                <div className="product-price">
                  {quantity > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(product);
                      }}
                    >
                      -
                    </button>
                  )}
                  {product.description}
                </div>
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAdd(product);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
