import { SearchBarProps } from "../App.types";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar: React.FC<SearchBarProps> = ({ findImage, cleanGallery, resetPage }) => {
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void | string {
    evt.preventDefault();
    cleanGallery();
    const userInputElement= evt.currentTarget.elements.namedItem('imageName') as HTMLInputElement;
    const userInput: string = userInputElement?.value.trim();
    if (userInput === "")
      return toast.error(<div>Enter text to search for an image</div>);
    else {
      resetPage();
      findImage(userInput);
    }
    evt.currentTarget.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="imageName"
          className={css.form}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
