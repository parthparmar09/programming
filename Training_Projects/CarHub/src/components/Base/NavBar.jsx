import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearhBar";
import { useSelector } from "react-redux";
import { Avatar, Button, IconButton, Tooltip } from "@mui/material";
import UserMenu from "./UserMenu";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const pages = [
  { path: "/buy", name: "Buy Car" },
  { path: "/sell", name: "Sell Car" },
  { path: "/chats", name: "Chats" },
  { path: "/#faqs", name: "FAQs" },
];

export default function NavBar() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" color="primary">
      <Container sx={{ width: 1 }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="" height="40" width="120" />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="" height="25" width="75" />
          </Box>
          <SearchBar />
          <Box
            sx={{
              ml: "auto",
              display: { xs: "none", md: "flex" },
              height: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => {
                  navigate(page.path);
                }}
                sx={{
                  my: 2,
                  ml: 2,
                  height: 1,
                  color:
                    window.location.pathname === page.path
                      ? "secondary.main"
                      : "secondary.light",
                  display: "block",
                  textTransform: "none",
                  fontSize: "large",
                  fontWeight: "bold",
                  ":hover": {
                    color: "whitesmoke",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <ThemeSwitch />
          {!user ? (
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              onClick={() => {
                navigate("/login");
              }}
              sx={{
                my: 2,
                ml: 2,
                height: 1,
                display: "block",
                textTransform: "none",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              Log In
            </Button>
          ) : (
            <Tooltip title="settings" disableInteractive>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ color: "whitesmoke", bgcolor: "secondary.main" }}>
                  {user.name
                    .split(" ")
                    .map((s) => s.slice(0, 1))
                    .join("")}
                </Avatar>
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </Container>
      {user && (
        <UserMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
      )}
    </AppBar>
  );
}
