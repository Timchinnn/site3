import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "./components/ProductModal/ProductModal";
import { useTelegram } from "./hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";
import useCart from "./useCart";
import Search from "./components/Search/Search";
import "./App.css";
import TelegramWebAppComponent from "./components/CartModal/CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Новое состояние для поискового запроса
  const { tg } = useTelegram();
  const { addedItems, onAdd, onRemove } = useCart(tg);

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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <TelegramWebAppComponent></TelegramWebAppComponent>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />{" "}
      {/* Используем компонент поиска */}
      <ProductList
        products={filteredProducts} // Используем отфильтрованные продукты
        addedItems={addedItems}
        onAdd={onAdd}
        onRemove={onRemove}
        openModal={openModal}
      />
      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}
export default App;
