import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./components/Product/Product";
import { getTotalPrice } from "./utils";
import ProductModal from "./components/ProductModal/ProductModal";
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
    const intervalId = setInterval(fetchProducts, 5000);
    return () => clearInterval(intervalId);
  }, []);

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
            <Product
              key={product.id}
              product={product}
              quantity={quantity}
              onAdd={onAdd}
              onRemove={onRemove}
              openModal={openModal}
            />
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
