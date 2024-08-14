import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "./components/ProductModal/ProductModal";
import { useTelegram } from "./hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";
import useCart from "./useCart";
import Search from "./components/Search/Search";
import CartModal from "./components/CartModal"; // Импортируем компонент CartModal
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartModalOpen, setCartModalOpen] = useState(false); // Новый стейт для корзины
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

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const openCartModal = () => {
    setCartModalOpen(true); // Функция для открытия модального окна корзины
  };

  const closeCartModal = () => {
    setCartModalOpen(false); // Функция для закрытия модального окна корзины
  };

  return (
    <div className="App">
      <h1>Магазин товаров</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />{" "}
      {/* Используем компонент поиска */}
      <ProductList
        products={filteredProducts} // Используем отфильтрованные продукты
        addedItems={addedItems}
        onAdd={onAdd}
        onRemove={onRemove}
        openModal={openProductModal}
      />
      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeProductModal} />
      )}
      <button onClick={openCartModal} className="cart-button">
        Корзина ({addedItems.length})
      </button>
      {isCartModalOpen && (
        <CartModal items={addedItems} onClose={closeCartModal} />
      )}
    </div>
  );
}

export default App;
