import { useId } from "react";
import css from "./Form.module.css";

const LoginForm = ({ onLogin }) => {
  const loginID = useId();
  const passwordID = useId();

  return (
    <>
      <form className={css.form} onSubmit={onLogin}>
        <label htmlFor={loginID}>Login field</label>
        <input
          id={loginID}
          className={css["form-input"]}
          type="text"
          name="login"
        />

        <label htmlFor={passwordID}>Password field</label>
        <input
          id={passwordID}
          className={css["form-input"]}
          type="text"
          name="password"
        />

        <button className={css["form-button"]} type="submit">
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
