import React, { useState } from "react";
import Icon from "./Icon";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
      <Icon
        src="search.svg"
        alt="search"
        onClick={() => {
          if (searchTerm)
            history.push(`/products?s=${searchTerm.toLowerCase()}`);
          setSearchTerm("");
        }}
      />
    </div>
  );
}
