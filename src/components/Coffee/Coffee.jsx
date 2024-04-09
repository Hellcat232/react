import { useState } from "react";
import css from "./Coffee.module.css";

const Coffee = () => {
  const [coffeesize, setCoffeesize] = useState("");

  const hendleSizeSelect = (event) => {
    setCoffeesize(event.target.value);
  };

  return (
    <div className={css["radio-button"]}>
      <h2>Selected your size: {coffeesize}</h2>
      <label>
        <input
          type="radio"
          name="coffeesize"
          value="sm"
          checked={"coffeesize" === "sm"}
          onChange={hendleSizeSelect}
        />
        Small
      </label>
      <label>
        <input
          className={css["radio-button"]}
          type="radio"
          name="coffeesize"
          value="md"
          checked={"coffeesize" === "md"}
          onChange={hendleSizeSelect}
        />
        Medium
      </label>
      <label>
        <input
          className={css["radio-button"]}
          type="radio"
          name="coffeesize"
          value="lg"
          checked={"coffeesize" === "lg"}
          onChange={hendleSizeSelect}
        />
        Large
      </label>
    </div>
  );
};

export default Coffee;
