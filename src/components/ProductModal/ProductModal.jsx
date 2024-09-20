// import React, { useEffect, useState } from "react";
// import "./ProductModal.css";

// const ProductModal = ({ product, onClose, onAdd, onRemove, addedItems }) => {
//   const addedItem = addedItems.find((item) => item.id === product.id);
//   const quantity = addedItem ? addedItem.quantity : 0;

//   // Состояние для текущей активной вкладки
//   const [activeTab, setActiveTab] = useState("description");

//   useEffect(() => {
//     if (!product) return;

//     // Отключение прокрутки при монтировании компонента
//     document.body.classList.add("no-scroll");
//     return () => {
//       // Включение прокрутки при размонтировании компонента
//       document.body.classList.remove("no-scroll");
//     };
//   }, [product]);

//   if (!product) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="modal-close-button" onClick={onClose}>
//           <span className="icon">×</span>
//         </button>
//         <div className="modal-inner-content">
//           <h2 className="modal-title">{product.name}</h2>
//           <img
//             className="modal-image"
//             src={product.photo_url}
//             alt={product.name}
//           />
//           <div className="tab-buttons">
//             <button onClick={() => setActiveTab("description")}>
//               Описание
//             </button>
//             <button onClick={() => setActiveTab("techSpecs")}>
//               Тех. характеристики
//             </button>
//             <button onClick={() => setActiveTab("howToBuy")}>Как купить</button>
//             <button onClick={() => setActiveTab("additionalServices")}>
//               Доп. услуги
//             </button>
//             <button onClick={() => setActiveTab("brochure")}>Буклет</button>
//           </div>

//           <div className="tab-content">
//             {activeTab === "description" && (
//               <p className="modal-description">{product.description}</p>
//             )}
//             {activeTab === "techSpecs" && (
//               <div className="tech-specs">
//                 {/* Пример: Здесь вы можете отображать технические характеристики */}
//                 <p>Процессор:</p>
//                 {/* <p>Оперативная память: {product.specs.ram}</p>
//                 <p>Хранение: {product.specs.storage}</p> */}
//               </div>
//             )}
//             {activeTab === "howToBuy" && (
//               <p>Информация о том, как купить этот продукт.</p>
//             )}
//             {activeTab === "additionalServices" && (
//               <p>Информация о дополнительных услугах.</p>
//             )}
//             {activeTab === "brochure" && (
//               <p>Ссылка или информация о буклете.</p>
//             )}
//           </div>

//           <div className="product-price-add">
//             {quantity > 0 ? (
//               <div className="price-controls">
//                 <button
//                   className="add-to-cart-min"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onRemove(product);
//                   }}
//                 >
//                   -
//                 </button>
//                 <div className="product-quantity">{quantity}</div>
//                 <button
//                   className="add-to-cart"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     onAdd(product);
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//             ) : (
//               <button
//                 className="add-to-cart"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onAdd(product);
//                 }}
//               >
//                 Купить
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;
import React, { useEffect } from "react";
import "./ProductModal.css";
import why from "./why.png";
import how from "./how.png";
import garant from "./garant.png";
import loyal from "./loyal.png";

const ProductModal = ({ product, onClose }) => {
  // const addedItem = addedItems.find((item) => item.id === product.id);
  // const quantity = addedItem ? addedItem.quantity : 0;
  console.log(product);

  // Состояние для текущей активной вкладки

  useEffect(() => {
    if (!product) return;
    // Отключение прокрутки при монтировании компонента
    document.body.classList.add("no-scroll");
    return () => {
      // Включение прокрутки при размонтировании компонента
      document.body.classList.remove("no-scroll");
    };
  }, [product]);

  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <span className="icon">×</span>
        </button>
        <img
          className="modal-image"
          src={product.photo_url}
          alt={product.name}
        />
        <div>
          <p></p>
          <button>Подробнее</button>
        </div>
        <div>
          {" "}
          <p></p>
        </div>

        <p>Полезная информация</p>
        <div>
          <div>
            <img src={why} alt="why" className="img-buttons-about" />
            <p>Почему BANSYS?</p>
          </div>
          <div>
            <img src={how} alt="how" className="img-buttons-about" />
            <p>Как купить?</p>
          </div>
          <div>
            <img src={garant} alt="garant" className="img-buttons-about" />
            <p>Гарантия</p>
          </div>
          <div>
            <img src={loyal} alt="loyal" className="img-buttons-about" />
            <p>Наша программа лояльности</p>
          </div>
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductModal;
