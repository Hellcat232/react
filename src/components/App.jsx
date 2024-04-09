import { useState } from "react";
import "./App.css";
import { Product } from "./Product/Product";
import LoginForm from "./Form/form";
import SearchBar from "./SearchBar/SearchBar";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import Coffee from "./Coffee/Coffee";
import Checkbox from "./Checkbox/Checkbox";

export default function App() {
  const [lang, setLang] = useState("en");
  const [checkbox, setCheckbox] = useState(false);
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const hendleCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  // const handleLogin = (event) => {
  //   setValues({
  //     ...values,
  //     login: event.target.value,
  //   });
  // };

  // const handlePassword = (event) => {
  //   setValues({
  //     ...values,
  //     password: event.target.value,
  //   });
  // };

  const handlerSubmit = (event) => {
    event.preventDefault();

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    setValues({
      login: "",
      password: "",
    });

    evt.target.reset();
  };

  const valueCheckbox = checkbox;

  return (
    <div>
      <SearchBar />
      <h1>Best selling</h1>
      <h2>Login to your account!</h2>
      <LoginForm
        submitForm={handleSubmitForm}
        onSub={handlerSubmit}
        values={values}
        // onLogin={handleLogin}
        // onPassword={handlePassword}
      />

      <LangSwitcher value={lang} onSelect={setLang} />
      <p>Selected lang:{lang}</p>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <Checkbox value={checkbox} change={hendleCheckbox} />

      {valueCheckbox ? <Coffee /> : ""}
    </div>
  );
}
