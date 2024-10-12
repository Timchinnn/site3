import React, { useState, useEffect } from "react";
import "./ProfileModal.css";
// import arrow from "./arrow.png";
// import b from "./B.png";
// import book from "./book.png";
// import { useNavigate } from "react-router-dom";
import axios from "axios"; // Добавьте импорт axios

const ProfileModal = ({ onClose }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [products, setProducts] = useState([]); // Добавьте состояние для хранения товаров
  // const navigate = useNavigate();

  useEffect(() => {
    // Загрузка товаров при монтировании компонента
    axios.get("/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Ошибка при получении товаров:", error));
  }, []);

  // const handleButtonClick = () => {
  //   setIsModalVisible(true);
  // };

  return (
    <div>
        <div className="modal-overlay">
          <div className="modal-content">
            {/* ... (остальной код остается без изменений) ... */}
            
            {/* Добавьте новый блок для отображения названий товаров */}
            <div className="product-names">
              <h3>Названия товаров:</h3>
              {products.map(product => (
                <div key={product.id} className="product-name-item">
                  {product.name}
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  );
};

export default ProfileModal