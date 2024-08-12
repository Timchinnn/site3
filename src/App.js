import React, { useEffect, useState } from "react";
import axios from "axios";
// import Product from "./components/Product/Product";
// import { getTotalPrice } from "./utils";
import ProductModal from "./components/ProductModal/ProductModal";
import { useTelegram } from "./hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";
import { useCart } from "./useCart";
function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <ProductList
        products={products}
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
