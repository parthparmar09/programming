import { Box, Paper } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useRef } from "react";

function Layout() {
  const location = useLocation();
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollTo(0, 0);
    }
  }, [location.pathname, location.search]);
  return (
    <Paper
      ref={topRef}
      elevation={0}
      sx={{ bgcolor: "background", height: "100vh", overflowY: "scroll" }}
    >
      <Navbar />
      <Box sx={{ mt: 8.5 }}>
        <Outlet />
      </Box>
      <Footer />
    </Paper>
  );
}

export default Layout;
