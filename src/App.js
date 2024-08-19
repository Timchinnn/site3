import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductModal from "./components/ProductModal/ProductModal";
import { useTelegram } from "./hooks/useTelegram";
import ProductList from "./components/ProductList/ProductList";
import useCart from "./useCart";
import Search from "./components/Search/Search";
import "./App.css";
import CartModal from "./components/CartModal/CartModal";
import { getTotalPrice } from "./utils";
import CategoryButtons from "./components/CategoryButtons/CategoryButtons";
import ProfileModal from "./components/ProfileModal/ProfileModal";
import profile from "./profile.png";
import { useTranslation } from "react-i18next";
import "./components/ProfileModal/i18n";

function App() {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { tg } = useTelegram();
  const { addedItems, onAdd, onRemove } = useCart(tg, () => {
    setIsProductModalOpen(false); // Закрываем модальное окно товара
    setIsProfileModalOpen(false);
    setIsCartModalOpen(true);
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const fetchProducts = () => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении товаров:", error);
      });
  };
  tg.expand();

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

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategorySelect = (categoryName) => {
    if (selectedCategory === categoryName && isCategorySelected) {
      setSelectedCategory("");
      setProducts(allProducts);
      setIsCategorySelected(false);
    } else {
      setSelectedCategory(categoryName);
      setIsCategorySelected(true);
      const filteredProducts = allProducts.filter(
        (product) => product.category === categoryName
      );

      setProducts(filteredProducts);
    }
  };

  const [userData, setUserData] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

  // Проверка пользователя
  const checkUserProfile = (userId) => {
    axios
      .get("/api/users")
      .then((response) => {
        const userProfile = response.data.find(
          (user) => user.user_id === userId
        );
        if (userProfile) {
          if (!userProfile.name && !userProfile.phone && !userProfile.email) {
            setIsRegisterFormOpen(true);
          } else {
            setUserData(userProfile);
          }
        } else {
          setIsRegisterFormOpen(true); // Пользователь не найден
        }
        setIsProfileModalOpen(true);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных пользователя:", error);
      });
  };

  const handleProfileButtonClick = () => {
    // Получаем user_id Telegram пользователя
    const telegramUserId = tg?.initDataUnsafe?.user?.id;
    checkUserProfile(telegramUserId);
  };

  return (
    <div className="App">
      <div className="language-toggle">
        <label className="flag-container">
          <input
            type="radio"
            name="language"
            value="ru"
            onChange={() => toggleLanguage("ru")}
          />
          <span className="flag ru">🇷🇺</span>
        </label>
        <label className="flag-container">
          <input
            type="radio"
            name="language"
            value="en"
            onChange={() => toggleLanguage("en")}
          />
          <span className="flag en">🇬🇧</span>
        </label>
      </div>
      <div className="heaeder-top">
        <h1>БЭНСИС</h1>
        <div className="profile-container">
          <img
            onClick={handleProfileButtonClick}
            src={profile}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>

      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Кнопка профиля */}
      <CategoryButtons
        categories={categories}
        onSelect={handleCategorySelect}
      />
      {/* <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      <ProductList
        products={filteredProducts}
        addedItems={addedItems}
        onAdd={onAdd}
        onRemove={onRemove}
        openModal={openProductModal}
      />
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
      {isProfileModalOpen && (
        <ProfileModal
          userData={userData}
          onClose={() => setIsProfileModalOpen(false)}
          isRegisterFormOpen={isRegisterFormOpen}
          onRegisterComplete={(data) => {
            setUserData(data); // Сохраняем нового пользователя
            setIsRegisterFormOpen(false);
          }}
          telegramUserId={tg?.initDataUnsafe?.user?.id} // Передаем user_id
        />
      )}
    </div>
  );
}

export default App;
