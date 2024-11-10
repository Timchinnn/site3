import React from "react";
import "./Search.css";
import { t } from "i18next";
const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-box">
      {" "}
      <input
        type="text"
        placeholder={t("Find product")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Обновляем состояние поискового запроса
        className="find-input"
      />
    </div>
  );
};

export default Search;
