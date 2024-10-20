import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./ProductModal.css";
import arrow from "./arrow.png";

const ProductModal = ({
  product,
  onClose,
  onAdd,
  onRemove,
  addedItems,
  goToCart,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    if (!product) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;

    // Проверяем, есть ли товар в корзине при открытии модального окна
    const itemInCart = addedItems.find((item) => item.id === product.id);
    setIsInCart(!!itemInCart);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [product, addedItems]);

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped left!"),
    onSwipedRight: () => console.log("Swiped right!"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!product) return null;

  // const addedItem = addedItems.find((item) => item.id === product.id);
  // const quantity = addedItem ? addedItem.quantity : 0;

  const handleDetailsClick = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" {...handlers}>
        {showDetails ? (
          <div className="more">
            <img src={arrow} className="arrow" alt="arrow" onClick={onClose} />
            <div className="block-about">
              <p>{product.description}</p>
            </div>
          </div>
        ) : (
          <>
            <img src={arrow} className="arrow" alt="arrow" onClick={onClose} />
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

            <div className="block-about">
              <p>{product.description}</p>
            </div>
            <p>Полезная информация</p>
            <div className="about-buttons-question-from">
              <div className="why">Почему BANSYS?</div>
              <div className="how">Поделись с другом</div>
              <div className="garante">Гарантия</div>
              <div className="loyal">Склад и производство</div>
            </div>
          </>
        )}
      </div>
      <div className="product-price-add">
        {isInCart ? (
          <button
            className="go-to-cart"
            onClick={(e) => {
              e.stopPropagation();
              goToCart();
            }}
          >
            Корзина
          </button>
        ) : (
          <button
            className="add-cart"
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product);
              setIsInCart(true);
            }}
          >
            Купить
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
