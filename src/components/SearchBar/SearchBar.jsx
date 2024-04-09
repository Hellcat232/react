import { useState } from "react";
import { useId } from "react";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  const searchId = useId();
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <label htmlFor={searchId}></label>
      <input
        className={css.input}
        id={searchId}
        type="text"
        value={inputValue}
        onChange={handleInputValue}
      />
      <button className={css["search-button"]} type="button">
        Search
      </button>
    </>
  );
};

export default SearchBar;
