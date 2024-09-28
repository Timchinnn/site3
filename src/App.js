import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search/Search";
import ProductModal from "./components/ProductModal/ProductModal";
import CartModal from "./components/CartModal/CartModal";
import useCart from "./useCart";
import "./App.css";
import { getTotalPrice } from "./utils";
import cart from "./path/to/cart.png";
function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const { addedItems, onAdd, onRemove } = useCart();

  const fetchCategories = () => {
    axios
      .get("/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) =>
        console.error("Ошибка при получении категорий:", error)
      );
  };

  const fetchProducts = () => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Ошибка при получении товаров:", error));
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
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
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
                        <img
                          src={cart}
                          alt="cart"
                          className="img-cart"
                          onClick={openCartModal}
                        />
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
