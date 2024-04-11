import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./Form.module.css";
import { Form, Formik, Field } from "formik";
const initialValues = { username: "", email: "", message: "", select: "cash" };

const ValidationScheme = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short!")
    .max(50, "Is well")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(256, "Too long!")
    .required("Required"),
  select: Yup.string().oneOf(["apple", "visa", "cash"]).required("Required"),
});

const LoginForm = () => {
  // const handleSubmit = (values, actions) => {
  //   console.log(values);
  //   actions.resetForm();
  // };

  const usernameId = useId();
  const emaild = useId();
  const messageId = useId();
  const selectId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        console.log(actions);
        actions.resetForm();
      }}
      validationSchema={ValidationScheme}
    >
      <Form className={css.form}>
        <label htmlFor={usernameId}>Username</label>
        <Field
          className={css["form-input"]}
          type="text"
          name="username"
          id={usernameId}
        />
        <ErrorMessage className={css.error} name="username" component="span" />

        <label htmlFor={emaild}>Email</label>
        <Field
          className={css["form-input"]}
          type="email"
          name="email"
          id={emaild}
        />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label htmlFor={selectId}>Select method</label>
        <Field as="select" name="select" id={selectId}>
          <option value="apple">Apple</option>
          <option value="visa">Visa</option>
          <option value="cash">Cash</option>
        </Field>
        <ErrorMessage className={css.error} name="select" component="span" />

        <label htmlFor={messageId}>Message</label>
        <Field as="textarea" cols="20" rows="5" name="message" id={messageId} />
        <ErrorMessage className={css.error} name="message" component="span" />

        <button className={css["form-button"]} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

// const LoginForm = ({ values, onSub, submitForm }) => {
//   const loginID = useId();
//   const passwordID = useId();

//   return (
//     <>
//       <form className={css.form} onSubmit={submitForm}>
//         <label htmlFor={loginID}>Login field</label>
//         <input
//           id={loginID}
//           className={css["form-input"]}
//           type="text"
//           name="login"
//           value={values.login}
//           onChange={onSub}
//         />

//         <label htmlFor={passwordID}>Password field</label>
//         <input
//           id={passwordID}
//           className={css["form-input"]}
//           type="text"
//           name="password"
//           value={values.password}
//           onChange={onSub}
//         />

//         <button className={css["form-button"]} type="submit">
//           Log in
//         </button>
//       </form>
//     </>
//   );
// };

// export default LoginForm;
export default LoginForm;
