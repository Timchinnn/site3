import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./ProductModal.css";
import arrow from "./arrow.png";

const ProductModal = ({ product, onClose, onAdd, onRemove, addedItems }) => {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!product) return;
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [product]);

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped left!"),
    onSwipedRight: () => console.log("Swiped right!"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!product) return null;

  const addedItem = addedItems.find((item) => item.id === product.id);
  const quantity = addedItem ? addedItem.quantity : 0;

  const handleDetailsClick = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" {...handlers}>
        <img className="arrow" src={arrow} alt="arrow" onClick={onClose} />
        <img
          className="modal-image"
          src={product.photo_url}
          alt={product.name}
        />
        <div className="card">
          <p className="card-title">{product.name}</p>
          <p className="details-button" onClick={handleDetailsClick}>
            Подробнее
          </p>
        </div>
        {showDetails && (
          <div className="block-about">
            <p></p> {/* Пустой тег <p> */}
          </div>
        )}
        <p>Полезная информация</p>
        <div className="about-buttons-question-from">
          <div className="why">Почему BANSYS?</div>
          <div className="how">Как купить?</div>
          <div className="garante">Гарантия</div>
          <div className="loyal">Наша программа лояльности</div>
        </div>
        <div className="product-price-add">
          {quantity > 0 ? (
            <div className="price-controls">
              <button
                className="add-to-cart-min"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(product);
                }}
              >
                -
              </button>
              <div className="product-quantity">{quantity}</div>
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
          ) : (
            <button
              className="add-cart"
              onClick={(e) => {
                e.stopPropagation();
                onAdd(product);
              }}
            >
              Купить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;