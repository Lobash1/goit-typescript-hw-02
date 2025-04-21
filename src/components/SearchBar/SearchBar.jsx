import { useState } from "react";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";
// import { BsSearchHeartFill } from "react-icons/bs";

export default function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!search.trim()) {
      return toast.error("Please enter search term!");
    }

    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        {/* <BsSearchHeartFill className={css.icon} /> */}
        <input
          value={search}
          onChange={handleInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
          type="text"
          name="search"
        />

        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
