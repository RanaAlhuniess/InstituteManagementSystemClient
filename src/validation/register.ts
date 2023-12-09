import * as yup from "yup";

const registerValidation = yup.object().shape({
  first_name: yup.string().required("First name is required!."),
  last_name: yup.string().required("Last name is required!."),
  email: yup.string().email("Invalid E-mail").required("E-Mail is required!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(6, "The password must be at least 6 characters long."),
});

export default registerValidation;
