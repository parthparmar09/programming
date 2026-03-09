import {
  Avatar,
  Box,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser, selectUser, selectIsLoggedIn } from "@features/users";
import { useToast } from "@hooks";

const MenuItems = [
  {
    name: "Profile",
    icon: <i className="fa-solid fa-user "></i>,
  },
  {
    name: "Settings",
    icon: <i className="fa-solid fa-gear "></i>,
  },
  {
    name: "Logout",
    icon: <i className="fa-solid fa-arrow-right-from-bracket "></i>,
  },
];
function NavMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showSuccess } = useToast();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth");
    handleClose();
    showSuccess("Logged out");
  };
  return (
    <>
      <Avatar
        sx={{
          display: isLoggedIn ? "block" : "none",

          cursor: "pointer",
          ":hover": {
            filter: "brightness(90%)",
          },
        }}
        alt="Travis Howard"
        src="https://source.unsplash.com/random?user"
        onClick={handleClickOpen}
      />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ px: 3 }}>
          <Box sx={{ px: 2 }}>
            <Typography fontSize="large">{user?.name}</Typography>
            <Typography sx={{ fontStyle: "italic", fontSize: "small" }}>
              {user?.email}
            </Typography>
          </Box>
          <Divider sx={{ my: 0.5 }} />
          {MenuItems.map((item) => (
            <MenuItem
              dense={true}
              key={item.name}
              onClick={item.name === "Logout" ? handleLogout : handleClose}
              sx={{ display: "flex", color: "text.secondary" }}
            >
              <Typography sx={{ mr: 1 }}>{item.icon}</Typography>
              <Typography variant="subtitle1">{item.name}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
}

export default NavMenu;
