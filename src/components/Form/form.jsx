import { useId } from "react";
import css from "./Form.module.css";

const LoginForm = ({ values, onSub, submitForm }) => {
  const loginID = useId();
  const passwordID = useId();

  return (
    <>
      <form className={css.form} onSubmit={submitForm}>
        <label htmlFor={loginID}>Login field</label>
        <input
          id={loginID}
          className={css["form-input"]}
          type="text"
          name="login"
          value={values.login}
          onChange={onSub}
        />

        <label htmlFor={passwordID}>Password field</label>
        <input
          id={passwordID}
          className={css["form-input"]}
          type="text"
          name="password"
          value={values.password}
          onChange={onSub}
        />

        <button className={css["form-button"]} type="submit">
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
