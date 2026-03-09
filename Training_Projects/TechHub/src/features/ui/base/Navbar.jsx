import { AppBar, Box } from "@mui/material";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import PageLinks from "./PageLinks";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{ borderBottom: 1, borderColor: "divider" }}
    >
      <Box
        className="flex-centered"
        sx={{
          p: 1,
          px: 3,
          justifyContent: "space-between",
        }}
      >
        <Box className="flex-centered" sx={{ gap: 3 }}>
          <Link to="/">
            <Box
              sx={{
                position: "relative",
                ":before": {
                  content: '"."',
                  position: "absolute",
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "secondary.light",
                  top: "-2.7%",
                  left: 104,
                  zIndex: 100,
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                sx={{
                  height: 50,
                }}
              />
            </Box>
          </Link>
          <SearchBar />
        </Box>

        <Box className="flex-centered">
          <PageLinks />
          <DarkModeToggle />
          <NavMenu />
        </Box>
      </Box>
    </AppBar>
  );
}

export default Navbar;
