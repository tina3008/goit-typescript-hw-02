import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (searchImg: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const searchImg =
      form.elements.searchImg.value;
    if (searchImg.trim() === "") {
      toast("Please fill in search folder", {
        style: {
          color: "red",
        },
      });
      return;
    }

    onSearch(searchImg);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchImg"
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
