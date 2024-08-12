import React from "react";
import "./Search.css";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Поиск товаров..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} // Обновляем состояние поискового запроса
    />
  );
};

export default Search;
