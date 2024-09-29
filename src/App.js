import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search/Search";
import ProductModal from "./components/ProductModal/ProductModal";
import CartModal from "./components/CartModal/CartModal";
import useCart from "./useCart";
import "./App.css";
import fly from "./fly.png";
import myLog from "./myLog.png";
import sendRequest from "./sendRequest.png";
import dn from "./dn.png";
import hyosung from "./hyosung.png";
import ncr from "./ncr.png";
import cart from "./cart.png";
import cartgl from "./cartgl.png";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    Promise.all([
      axios.get("/api/categories"),
      axios.get("/api/products"),
    ])
      .then(([categoriesResponse, productsResponse]) => {
        const allCategories = categoriesResponse.data;
        const allProducts = productsResponse.data;
        setProducts(allProducts);

        // Filter categories to include only those with products
        const categoriesWithProducts = allCategories.filter(category =>
          allProducts.some(product => product.category === category.name)
        );
        setCategories(categoriesWithProducts);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

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

  return (
    <div className="main">
      <div className="header-name">
        <div className="tg-link-button">
          <img src={fly} alt="tglink" className="tglink"></img>
          <a href="https://t.me/Bansys_sale" className="tg-button">
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
          onClick={() => navigate("/profile")}
        ></img>
        <img
          src={sendRequest}
          alt=""
          onClick={() => navigate("/send-request")}
        ></img>
      </div>
      <div className="company">
        <img src={hyosung} alt="hyosung" className="hyosung"></img>
        <img src={dn} alt="dn" className="dn"></img>
        <img src={ncr} alt="ncr"></img>
      </div>
      <div className="header-cart">
        <h1 className="catalog">Каталог</h1>
        <img src={cartgl} alt="cartgl" onClick={openCartModal} className="cartgl"></img>
      </div>
      
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
                        <img src={cart} alt="cart" className="img-cart" />
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
          onAdd={addToCart}
          onRemove={removeFromCart}
          addedItems={cartItems}
        />
      )}
      {isCartModalOpen && (
     <CartModal
       items={cartItems}
       onClose={closeCartModal}
       onAdd={addToCart}
       onRemove={removeFromCart}
     />
   )}
    </div>
  );
}

export default App;