import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Для стилей, создайте этот файл
import ProductModal from "./ProductModal"; // Импортируйте модальное окно

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            key={product.id}
            className="product"
            onClick={() => openModal(product)}
          >
            <img src={product.photo_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
