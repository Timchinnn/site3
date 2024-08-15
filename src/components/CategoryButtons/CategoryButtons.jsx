import React, { useState } from "react";
import "./CategoryButtons.css";

const CategoryButtons = ({ categories, onSelect }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (categoryName) => {
    // Если кнопка уже активная, сбрасываем ее
    setActiveButton(activeButton === categoryName ? null : categoryName);
    onSelect(categoryName); // Срабатывает функция выбора
  };

  return (
    <div className="category-buttons">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(category.name)}
          className={activeButton === category.name ? "active" : ""}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
