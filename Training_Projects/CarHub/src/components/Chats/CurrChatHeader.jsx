import { Box, IconButton, Typography } from "@mui/material";
import { useChatContext } from "../../context/ChatContext";
import { useNavigate } from "react-router-dom";
import { CallRounded } from "@mui/icons-material";

export default function CurrChatHeader() {
  const { curr } = useChatContext();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => navigate(`/car/${curr.car?.id}`)}
      >
        <Box sx={{ borderRadius: 3, overflow: "hidden", height: 60 }}>
          <img
            src="https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="car"
            height={60}
          />
        </Box>
        <Box sx={{ ml: 2 }}>
          <Typography fontWeight="bold">
            {curr.car?.brand} {curr.car?.model}
          </Typography>
          <Typography variant="subtitle1">
            {curr.car?.year} - {curr.car?.transmission} - {curr.car?.fuelType}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ my: "auto", display: "flex", alignItems: "center" }}>
        <Box sx={{ mr: 1 }}>
          <Typography fontWeight="bold" align="right">
            {curr.owner?.name}
          </Typography>
          <Typography variant="subtitle1" align="right">
            {curr.owner?.city}, {curr.owner?.state}
          </Typography>
        </Box>
        <IconButton>
          <CallRounded />
        </IconButton>
      </Box>
    </Box>
  );
}
