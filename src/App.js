import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "./components/ProductModal/ProductModal";
import { useTelegram } from "./hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";
import useCart from "./useCart";
import Search from "./components/Search/Search";
import "./App.css";
import CartModal from "./components/CartModal/CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // Новое состояние для отображения корзины
  const [searchQuery, setSearchQuery] = useState("");
  const { tg } = useTelegram();

  const { addedItems, onAdd, onRemove } = useCart(tg, openModal, openCartModal); // Передаем новую функцию для открытия корзины

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Магазин товаров</h1>
      <TelegramWebAppComponent />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductList
        products={filteredProducts}
        addedItems={addedItems}
        onAdd={onAdd}
        onRemove={onRemove}
        openModal={openModal}
      />
      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
      {isCartModalOpen && (
        <CartModal items={addedItems} onClose={closeCartModal} />
      )}
    </div>
  );
}

export default App;
