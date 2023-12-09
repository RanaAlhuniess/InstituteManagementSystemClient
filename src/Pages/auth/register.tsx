import { Formik } from "formik";
import { FunctionComponent } from "react";
import registerValidation from "../../validation/register";
import {
  Avatar,
  Box,
  Grid,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import BoxWrap from "../../components/box-wrap";
import FormTextField from "../../components/form-text-field";
import { Link } from "react-router-dom";
import CButton from "../../components/button";
interface RegisterPageProps {}

const RegisterPage: FunctionComponent<RegisterPageProps> = () => {
  const formInitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const handleFormSubmit = () => {};
  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={registerValidation}
        onSubmit={handleFormSubmit}
        validateOnBlur={false}
      >
        {({ values, resetForm, handleSubmit, setFieldValue, isSubmitting }) => {
          const onHandleChange = (
            e:
              | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              | SelectChangeEvent<any>
          ) => {
            const { name, value } = e.target;
            setFieldValue(name, value);
          };
          return (
            <Box
              sx={{
                m: "auto",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.light" }}>
                <LockIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form onSubmit={handleSubmit}>
                <BoxWrap padding={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <FormTextField
                        name="first_name"
                        label="First Name"
                        value={values.first_name || ""}
                        required={true}
                        onChange={onHandleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormTextField
                        name="last_name"
                        label="Last Name"
                        value={values.last_name || ""}
                        required={true}
                        onChange={onHandleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormTextField
                        name="email"
                        label="E-mail"
                        value={values.email || ""}
                        required={true}
                        onChange={onHandleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormTextField
                        name="password"
                        label="Password"
                        value={values.password || ""}
                        required={true}
                        onChange={onHandleChange}
                      />
                    </Grid>
                  </Grid>
                  <CButton
                    label="Sign up"
                    type="submit"
                    bgColor="secondary.light"
                  />
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/login">Already have an account? Sign in</Link>
                    </Grid>
                  </Grid>
                </BoxWrap>
              </form>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterPage;
