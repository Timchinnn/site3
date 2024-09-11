import React from "react";
import "./Search.css";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-box">
      {" "}
      <input
        type="text"
        placeholder="Найти товар"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Обновляем состояние поискового запроса
      />
    </div>
  );
};

export default Search;
