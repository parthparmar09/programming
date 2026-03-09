import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CallRounded, ChatRounded } from "@mui/icons-material";
import { useChatContext } from "../../context/ChatContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Price({ car, owner }) {
  const { createChat } = useChatContext();
  const { darkMode, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClick = () => {
    createChat(car, owner);
    navigate("/chats");
  };
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 5,
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ textOverflow: "ellipsis" }}
      >
        {car.year} {car.brand} {car.model}
      </Typography>
      <Typography variant="body1" sx={{ mt: 0.5 }}>
        {car.mileage / 1000}K Km &#x2022; {car.fuelType} &#x2022;{" "}
        {car.transmission}
      </Typography>
      <Typography variant="body1" sx={{ mt: 0.5 }}>
        <LocationOnRoundedIcon sx={{ fontSize: 20 }} />
        Ahmedabad, Gujarat
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "secondary.main" }}
        >
          &#x20B9; {(car.price / 100000).toFixed(2)} Lakh
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          From &#x20B9;{(car.price / 24000).toFixed(1)}K/m
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="subtitle2">Fixed on road price</Typography>
        <Typography
          variant="subtitle2"
          component="a"
          sx={{
            color: "gray",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          View offers
        </Typography>
      </Box>
      <Box
        sx={{
          display: user.id === owner.id ? "none" : "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mt: 2,
        }}
      >
        <Button
          sx={{ width: "48%", borderRadius: 2 }}
          size="large"
          variant="contained"
          color="secondary"
          disableElevation
          onClick={handleClick}
          startIcon={<ChatRounded />}
        >
          Chat
        </Button>
        <Button
          sx={{
            width: "48%",
            borderRadius: 2,
            borderColor: darkMode ? "grey.main" : "primary",
            color: darkMode ? "grey.main" : "primary",
          }}
          size="large"
          variant="outlined"
          startIcon={<CallRounded />}
        >
          Call
        </Button>
      </Box>
    </Paper>
  );
}
