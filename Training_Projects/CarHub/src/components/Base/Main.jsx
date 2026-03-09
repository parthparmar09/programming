import { Box, Container } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import SmallNavBar from "./SmallNavBar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Main() {
  const { darkMode } = useSelector((state) => state.user);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let element = document.querySelector(location.hash);
      let headerOffset = 100;
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);
  return (
    <Box
      sx={{
        bgcolor: !darkMode ? "grey.light" : "primary.dark",
      }}
    >
      <NavBar />
      <SmallNavBar />
      {location.pathname === "/" && <Header />}
      <Container
        maxWidth="lg"
        sx={{
          color: darkMode ? "darkgray" : "primary.dark",
          minHeight: "50vh",
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
