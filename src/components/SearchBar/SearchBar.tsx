import style from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.inputWrapper}>
          <button type="submit" className={style.searchButton}>
            <IoSearch />
          </button>
          <input
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            id="search"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={style.input}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
