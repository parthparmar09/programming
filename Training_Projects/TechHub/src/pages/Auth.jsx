import { Box, Container, Paper } from "@mui/material";
import { useState } from "react";
import {
  LoginForm,
  SignUpForm,
  useLoginMutation,
  useSignupMutation,
} from "@features/auth";
import { validateEmail, validateName, validatePassword } from "@helpers";
import { useCustomLoader, useToast } from "@hooks";
import { useDispatch } from "react-redux";
import { setUser } from "@features/users";
import Navbar from "@features/ui/base/Navbar.jsx";
import { useNavigate } from "react-router-dom";

const formStyles = {
  width: { xs: "90%", md: "75%" },
  p: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const initialFormData = {
  email: "sneha@gmail.com",
  password: "sneha@121",
  name: "",
};
function Auth() {
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();
  const { showLoader, hideLoader, Loader } = useCustomLoader();
  const { showError, showSuccess } = useToast();
  const dispath = useDispatch();
  const navigate = useNavigate();

  const [isLoginPage, setLoginPage] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const toggleLoginPage = () => {
    setErrors({});
    setFormData(initialFormData);
    setLoginPage(!isLoginPage);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    errors.email = validateEmail(formData.email);
    errors.password = validatePassword(formData.password);
    errors.name = isLoginPage ? "" : validateName(formData.name);
    setErrors(errors);

    if (Object.keys(errors).some((key) => errors[key] !== "")) {
      return;
    }

    let response = {};
    showLoader();
    try {
      if (isLoginPage) {
        response = await login(formData);
      } else {
        response = await signup(formData);
      }

      if (response.error) {
        showError(response.error.data?.message);
      } else {
        showSuccess(response.data.message);
        dispath(
          setUser({ user: response.data.user, token: response.data.token })
        );
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader();
      setFormData(initialFormData);
    }
  };

  const formProps = {
    toggleLoginPage,
    formStyles,
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
  return (
    <Box
      className="flex-centered"
      component={Paper}
      elevation={0}
      sx={{
        height: "100vh",
        width: 1,
        p: 3,
        bgcolor: "background",
      }}
    >
      <Navbar />
      <Loader />
      <Paper
        component={Container}
        elevation={5}
        maxWidth="sm"
        className="flex-centered"
        sx={{
          width: { xs: 1, md: 0.5 },
          py: { xs: 3, lg: 5 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isLoginPage ? (
          <LoginForm {...formProps} />
        ) : (
          <SignUpForm {...formProps} />
        )}
      </Paper>
    </Box>
  );
}

export default Auth;
