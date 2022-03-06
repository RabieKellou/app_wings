import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/ui/Input";

import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Ce champ est obligatoire")
    .email("Ce champ est invalide"),
  password: Yup.string().required("Ce champ est obligatoire").min(6),
});

const Login = () => {
  const { Login } = useAuth();
  const { handleSubmit, errors, touched, ...formik } = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: async (values) => {
      await Login(values.email, values.password);
    },
    validationSchema,
  });
  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__form__title">Login</h3>
        <Input
          type="text"
          error={errors.email && touched.email ? errors.email : undefined}
          label="email"
          placeholder="email@example.com"
          name="email"
          onChange={formik.handleChange("email")}
          value={formik.values.email}
        />

        <Input
          label="Password"
          type="password"
          placeholder="password"
          name="password"
          error={
            errors.password && touched.password ? errors.password : undefined
          }
          onChange={formik.handleChange("password")}
          value={formik.values.password}
        />
        <button
          type="submit"
          style={{ marginTop: "20px" }}
          className="btn large full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
