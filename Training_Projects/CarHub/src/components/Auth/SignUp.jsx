import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const CustomTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
    "&:hover fieldset": {
      borderColor: "primary.dark",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.dark",
    },
  },
}));

const icons = [
  "fa-brands fa-google fa-2xl",
  "fa-brands fa-facebook-f fa-2xl",
  "fa-brands fa-apple fa-2xl",
];
export default function SignUp({ openLogin }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailErr, setEmailErr] = useState({ status: false, msg: "" });
  const [pwdErr, setPwdErr] = useState({ status: false, msg: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (email === "") {
      setEmailErr({ status: true, msg: "email is required" });
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailErr({ status: true, msg: "invalid email" });
      return;
    }
    setEmailErr({ status: false, msg: "" });
  };
  const validatePwd = (e) => {
    const pwd = e.target.value;
    setPwd(pwd);
    if (pwd === "") {
      setPwdErr({ status: true, msg: "password is required" });
      return;
    }
    if (pwd.length < 6) {
      setPwdErr({ status: true, msg: "password is too small" });
      return;
    }
    if (pwd.length > 30) {
      setPwdErr({ status: true, msg: "password is too big" });
      return;
    }
    setPwdErr({ status: false, msg: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErr({ status: true, msg: "email is required" });
      return;
    }
    if (!pwd) {
      setPwdErr({ status: true, msg: "password is required" });
      return;
    }
    setEmailErr({ status: false, msg: "" });
    setPwdErr({ status: false, msg: "" });

    dispatch(signUpUser({ name, email, password: pwd }));
    setEmail("");
    setPwd("");
    setName("");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 5,
        height: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography align="right" fontSize="small">
        Already a member?{" "}
        <Typography
          fontSize="small"
          component="span"
          sx={{
            color: "blue",
            fontWeight: "bold",
            ":hover": { textDecoration: "underline", cursor: "pointer" },
          }}
          onClick={openLogin}
        >
          Sign In
        </Typography>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          height: 1,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="secondary">
          Sign Up
        </Typography>
        <Typography sx={{ color: "primary.dark", mb: 3 }}>
          Your dream car awaits you!!!
        </Typography>
        <CustomTextField
          placeholder="name"
          sx={{ width: "80%", mb: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <CustomTextField
          placeholder="email"
          sx={{ width: "80%", mb: 2 }}
          value={email}
          onChange={validateEmail}
          error={emailErr.status}
          helperText={emailErr.msg}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <CustomTextField
          placeholder="password"
          type={showPassword ? "text" : "password"}
          sx={{ width: "80%", mb: 2 }}
          value={pwd}
          onChange={validatePwd}
          error={pwdErr.status}
          helperText={pwdErr.msg}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyRoundedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          sx={{ borderRadius: 3, width: "80%", textTransform: "none" }}
          color="secondary"
          variant="contained"
          disableElevation
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

        <Divider sx={{ width: 1, my: 2 }}>
          <Typography>or continue with</Typography>
        </Divider>

        <Box sx={{ display: "flex" }}>
          {icons.map((icon, i) => (
            <Box
              key={i}
              sx={{
                p: 3,
                mr: 1,
                border: "1px solid",
                borderColor: "primary.light",
                borderRadius: 5,
                ":hover": {
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  transform: "scale(1.01)",
                  transition: "transform 0.25s ease",
                },
                ":active": {
                  bgcolor: "secondary.light",
                },
              }}
            >
              <i className={icon}></i>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
