import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search/Search";
import ProductModal from "./components/ProductModal/ProductModal";
import CartModal from "./components/CartModal/CartModal";
import useCart from "./useCart";
import "./App.css";
import fly from "./fly.png";
// import myLog from "./myLog.png";
// import sendRequest from "./sendRequest.png";
import dn from "./dn1.png";
import hyosung from "./hyosung2.png";
import ncr from "./ncr1.png";
import grg from "./Grg.png";
import oki from "./Oki.png";
import wincor from "./Wincor.png";
import cart from "./cart.png";
import cartgl from "./cartgl.png";
import right from "./right.png";
import left from "./left.png";
import { useTranslation } from "react-i18next";
function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const goToCart = () => {
    setIsCartModalOpen(true);
  };
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    const fetchData = () => {
      const categoriesPromise = axios.get("/api/categories");
      const productsPromise = axios.get("/api/products");

      Promise.all([categoriesPromise, productsPromise])
        .then(([categoriesResponse, productsResponse]) => {
          setCategories(categoriesResponse.data);
          setProducts(productsResponse.data);
        })
        .catch((error) => {
          console.error("Ошибка при получении данных:", error);
          // Добавьте здесь обработку ошибок, например, установку состояния ошибки
        });
    };
    fetchData();
  }, []);
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory)
  );

  const categoriesWithFilteredProducts = categories.filter((category) =>
    filteredProducts.some((product) => product.category === category.name)
  );

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };
  // const [cartItemsCount] = useState(0);

  const closeProductModal = () => {
    setSelectedProduct(null);
    setIsProductModalOpen(false);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };
  const resetCart = () => {
    clearCart(); // Очистка корзины
    console.log(cartItems);
  };
  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null); // Сбрасываем категорию, если она уже выбрана
    } else {
      setSelectedCategory(categoryName); // Устанавливаем выбранную категорию
    }
  };

  return (
    <div className="main">
      <div className="header-name">
        <button onClick={changeLanguage} className="translate-button">
          {i18n.language === "ru" ? "EN" : "RU"}
        </button>
        <div className="tg-link-button">
          <img src={fly} alt="tglink" className="tglink"></img>
          <a href="https://t.me/Bansys_sale" className="tg-button">
            @Bansys_sale
          </a>
        </div>
      </div>

      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div></div>

      <div className="log-help">
        <div className="my-log" onClick={() => navigate("/guarantee")}>
          <img src={left} alt="right"></img>
          <p>{t("share")}</p>
        </div>
        <div className="help" onClick={() => navigate("/how-to-buy")}>
          <p>{t("ensure")}</p>
          <img src={right} alt="left"></img>
        </div>
      </div>
      <div className="log-help">
        <div className="my-log" onClick={() => navigate("/profile")}>
          <img src={left} alt="right"></img>
          <p>{t("My Office")}</p>
        </div>
        <div className="help" onClick={() => navigate("/send-request")}>
          <p>{t("Leave an application")}</p>
          <img src={right} alt="left"></img>
        </div>
      </div>
      {/* <img
          src={myLog}
          className="my-log"
          alt=""
          loading="eager"
          onClick={() => navigate("/profile")}
        ></img>
        <img
          src={sendRequest}
          alt=""
          onClick={() => navigate("/send-request")}
        ></img> */}
      {/* </div> */}
      <div className="company">
        <div className="companya">
          <img src={dn} alt="dn"></img>
          <button
            className="more-detailed"
            onClick={() => handleCategoryClick("Банкоматы Diebold")}
          >
            {t("More detailed")}
          </button>
        </div>
        <div className="companya">
          <img src={grg} alt="grg"></img>
          <button
            className="more-detailed"
            onClick={() => handleCategoryClick("Банкоматы GRG")}
          >
            {t("More detailed")}
          </button>
        </div>
        <div className="companya">
          <img src={hyosung} alt="hyosung"></img>
          <button
            className="more-detailed"
            onClick={() => handleCategoryClick("Банкоматы Nautilus Huosyng")}
          >
            {t("More detailed")}
          </button>
        </div>
        <div className="companya">
          <img src={ncr} alt="ncr"></img>
          <button
            className="more-detailed"
            onClick={() => handleCategoryClick("Банкоматы NCR")}
          >
            {t("More detailed")}
          </button>
        </div>
        <div className="companya">
          <img src={oki} alt="oki"></img>
          <button
            className="more-detailed"
            onClick={() => handleCategoryClick("oki")}
          >
            {t("More detailed")}
          </button>
        </div>
        <div className="companya">
          <img src={wincor} alt="wincor"></img>
          <button
            className="more-detailed"
            onClick={() => handleCategoryClick("Банкоматы Wincor Nixdorf")}
          >
            {t("More detailed")}
          </button>
        </div>
      </div>
      <div className="header-cart">
        <h1 className="catalog">{t("Catalogue")}</h1>
        <img
          src={cartgl}
          alt="cartgl"
          onClick={openCartModal}
          className="cartgl"
        ></img>
      </div>

      <div className="category">
        {categoriesWithFilteredProducts.length > 0 ? (
          categoriesWithFilteredProducts.map((category) => (
            <div key={category.id}>
              <p className="category-text">{t(`${category.name}`)}</p>
              <div className="products">
                {filteredProducts
                  .filter((product) => product.category === category.name)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="product-item"
                      onClick={() => openProductModal(product)}
                    >
                      <img
                        src={product.photo_url}
                        alt={product.name}
                        className="img-product"
                      />
                      <p className="product-name">{t(`${product.name_en}`)}</p>
                      <div className="ordertext-cart">
                        <p>{t("By order")}</p>
                        <img src={cart} alt="cart" className="img-cart" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p>Нет категорий с подходящими товарами...</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <button className="cart-button" onClick={openCartModal}>
          Корзина
        </button>
      )}

      {isProductModalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProductModal}
          onAdd={addToCart}
          onRemove={removeFromCart}
          addedItems={cartItems}
          goToCart={goToCart}
        />
      )}
      {isCartModalOpen && (
        <CartModal
          items={cartItems}
          onClose={closeCartModal}
          onAdd={addToCart}
          onRemove={removeFromCart}
          onResetCart={resetCart} // Убедитесь, что эта строка присутствует
        />
      )}
    </div>
  );
}

export default App;
