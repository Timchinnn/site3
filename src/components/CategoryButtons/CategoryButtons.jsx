import React from "react";
import "./CategoryButtons.css"; // Создайте файл для стилей, если нужно

const CategoryButtons = ({ categories, onSelect }) => {
  return (
    <div className="category-buttons">
      {categories.map((category, index) => (
        <button key={index} onClick={() => onSelect(category.name)}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
