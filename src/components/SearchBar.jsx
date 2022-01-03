import React, { useState } from "react";
import Icon from "./Icon";
import { useDispatch, ACTION } from "../store";

export default function SearchBar() {
  const dispatch = useDispatch();
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
          dispatch({ type: ACTION.SET_SEARCH_TERM, payload: searchTerm });
          setSearchTerm("");
        }}
      />
    </div>
  );
}
