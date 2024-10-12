import React, { useState, useEffect } from "react";
import "./ProfileModal.css";
import axios from "axios";

const ProfileModal = ({ onClose }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Ошибка при получении товаров:", error));
  }, []);

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal-content">
          {/* ... (остальной код остается без изменений) ... */}
          
          {/* Новый блок для отображения названий товаров */}
          <div className="product-names">
            <h3>Названия товаров:</h3>
            <ul>
              {products.map(product => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;