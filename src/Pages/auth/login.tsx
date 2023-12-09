import BoxWrap from "../../components/box-wrap";
import loginValidation from "../../validation/login";
import { Formik } from "formik";
import { FunctionComponent } from "react";
import {
  Avatar,
  Box,
  Grid,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import FormTextField from "../../components/form-text-field";
import LoginIcon from "@mui/icons-material/Login";
import CButton from "../../components/button";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const navigate: NavigateFunction = useNavigate();

  const formInitialValues = {
    email: "",
    password: "",
  };

  const handleFormSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={loginValidation}
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
                minWidth: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LoginIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in
              </Typography>
              <form onSubmit={handleSubmit}>
                <BoxWrap padding={2}>
                  <Grid container spacing={2}>
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
                  <CButton label="Log in" type="submit" />
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/register">Don't have an account? Sign Up</Link>
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

export default LoginPage;
