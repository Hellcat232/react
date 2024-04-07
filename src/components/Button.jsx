import { useState } from "react";

const Button = () => {
  const [onClick, setClick] = useState(0);

  const handleClick = () => {
    setClick(onClick);
  };

  return <button onClick={handleClick}>Show products</button>;
};

export default Button;
