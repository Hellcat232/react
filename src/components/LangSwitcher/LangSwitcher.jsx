import { useId } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  const hendleSelectState = (event) => {
    onSelect(event.target.value);
  };

  return (
    <>
      <label htmlFor={selectId}>Choose languages</label>
      <select id={selectId} value={value} onChange={hendleSelectState}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </>
  );
};

export default LangSwitcher;
