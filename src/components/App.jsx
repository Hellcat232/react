import "./App.css";
import { Product } from "./Product";
import LoginForm from "./Form/form";

export default function App() {
  const handlerSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    // const { login, password } = form.elements;

    // onLogin({
    //   login: login.value,
    //   password: password.value,
    // });

    form.reset();
  };

  return (
    <div>
      <h1>Best selling</h1>
      <h2>Login to your account!</h2>
      <LoginForm onLogin={handlerSubmit} />
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
    </div>
  );
}
