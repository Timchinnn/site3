import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search/Search";
import "./App.css";
import fly from "./fly.png";
import myLog from "./myLog.png";
import sendRequest from "./sendRequest.png";
import dn from "./dn.png";
import hyosung from "./hyosung.png";
import ncr from "./ncr.png";
import cart from "./cart.png";
import ProductModal from "./components/ProductModal/ProductModal";
import CartModal from "./components/CartModal/CartModal";
import useCart from "./useCart";
import { getTotalPrice } from "./utils";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { addedItems, onAdd, onRemove } = useCart(() =>
    setIsCartModalOpen(true)
  );

  const fetchCategories = () => {
    axios
      .get("/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении категорий:", error);
      });
  };

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
    fetchCategories();
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openProfilePage = () => {
    navigate("/profile");
  };

  const openSendRequestPage = () => {
    navigate("/send-request");
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setIsProductModalOpen(false);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className="main">
      <div className="header-name">
        {/* Removed Telegram button logic */}
        <div className="page-link-button">
          <img src={fly} alt="page-link" className="page-link"></img>
          <a href="https://t.me/Bansys_sale" className="page-button">
            @Bansys_sale
          </a>
        </div>
      </div>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="about-buttons-question">
        <div className="why">Почему BANSYS?</div>
        <div className="how">Как купить?</div>
        <div className="garante">Гарантия</div>
        <div className="loyal">Наша программа лояльности</div>
      </div>
      <div className="log-help">
        <img
          src={myLog}
          className="my-log"
          alt=""
          loading="eager"
          onClick={openProfilePage}
        ></img>
        <img src={sendRequest} alt="" onClick={openSendRequestPage}></img>
      </div>
      <div className="company">
        <img src={hyosung} alt="hyosung" className="hyosung"></img>
        <img src={dn} alt="dn" className="dn"></img>
        <img src={ncr} alt="ncr"></img>
      </div>
      <h1 className="catalog">Каталог</h1>
      <div className="category">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id}>
              <p className="category-text">{category.name}</p>
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
                      <p className="product-name">{product.name}</p>
                      <div className="ordertext-cart">
                        <p>Под заказ</p>
                        <img src={cart} alt={cart} className="img-cart" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p>Загрузка категорий...</p>
        )}
      </div>
      {isProductModalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProductModal}
          onAdd={onAdd}
          onRemove={onRemove}
          addedItems={addedItems}
        />
      )}
      {isCartModalOpen && (
        <CartModal
          items={addedItems}
          total={getTotalPrice(addedItems)}
          onClose={closeCartModal}
        />
      )}
    </div>
  );
}

export default App;
