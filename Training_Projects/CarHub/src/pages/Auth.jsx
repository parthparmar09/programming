import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import { useState } from "react";
import logo from "../assets/logo/logo.png";

const icons = [
  "fa-brands fa-facebook-f  ",
  "fa-brands fa-whatsapp  ",
  "fa-brands fa-instagram   ",
  "fa-brands fa-x-twitter   ",
  "fa-brands fa-medium  ",
  "fa-brands fa-linkedin-in   ",
];

export default function Auth() {
  const [signUp, setSignUp] = useState(false);
  const openLogin = () => {
    setSignUp(false);
  };
  const openSignUp = () => {
    setSignUp(true);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          height: { xs: "100%", md: "90%", xl: "80%" },
          borderRadius: 5,
          bgcolor: "whitesmoke",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px",
        }}
      >
        <Box
          sx={{
            minWidth: "60%",
            height: "92%",
            my: "auto",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            bgcolor: "primary.main",
          }}
        >
          <img src={logo} alt="" height="100" />
          <Divider
            sx={{ width: "80%", backgroundColor: "whitesmoke", my: 5 }}
          />

          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            {icons.map((icon, i) => (
              <IconButton key={i} sx={{ color: "whitesmoke", mr: 1 }}>
                <i className={icon}></i>
              </IconButton>
            ))}
          </Box>
          <Typography
            align="center"
            variant="subtitle1"
            sx={{ color: "whitesmoke" }}
          >
            &#169;2024 CarHub, All rights reserved
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: 1,
          }}
        >
          {signUp ? (
            <SignUp openLogin={openLogin} />
          ) : (
            <Login openSignUp={openSignUp} />
          )}
        </Box>
      </Container>
    </Box>
  );
}
