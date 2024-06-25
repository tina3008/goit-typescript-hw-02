import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

interface Target extends EventTarget {
  query: HTMLInputElement;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as Target;
    const query = form.query.value;

    if (query.trim() === "") {
      toast("Please fill in search folder", {
        style: {
          color: "red",
        },
      });
      return;
    }

    onSearch(query);   
    // form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}
