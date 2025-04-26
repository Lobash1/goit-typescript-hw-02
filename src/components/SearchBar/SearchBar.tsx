import { ChangeEvent, FormEvent, useState } from "react";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

interface SearchBarProp {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProp) {
  const [search, setSearch] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!search.trim()) {
      return toast.error("Please enter search term!");
    }

    onSubmit(search.trim());
    setSearch("");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
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
