import { Logout } from "@mui/icons-material";
import {
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function UserMenu({ anchorEl, open, handleClose }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
    handleClose();
  };
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      sx={{ width: 500 }}
      onClose={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="h6">{user.name}</Typography>
        <Typography fontStyle="italic">{user.email}</Typography>
      </Box>
      <Divider />

      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
