import { Box, CardContent, Divider, Paper, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useNavigate } from "react-router-dom";
import SmallCarousel from "../Sell/SmallCarousel";
import { useSelector } from "react-redux";

export default function CarCard({ car }) {
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state.user);
  return (
    <Paper
      elevation={darkMode ? 1 : 0}
      sx={{
        borderRadius: 5,
        border: "1px solid",
        bgcolor: !darkMode && "grey.main",
        overflow: "hidden",
        borderColor: darkMode ? "transparent" : "secondary.light",
        ":hover": {
          cursor: "pointer",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          transform: "scale(1.01)",
          transition: "transform 0.25s ease",
        },
      }}
      onClick={() => navigate(`/car/${car.id}`)}
    >
      <SmallCarousel height={150} />
      <CardContent>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ textOverflow: "ellipsis" }}
        >
          {car.year} {car.brand} {car.model}
        </Typography>
        <Typography variant="subtitle2" fontSize="small">
          {car.mileage / 1000}K Km &#x2022; {car.fuelType} &#x2022;{" "}
          {car.transmission}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="h6" sx={{ color: "secondary.main " }}>
            &#x20B9; {(car.price / 100000).toFixed(1)}L
          </Typography>
          <Typography variant="subtitle2" fontSize="small">
            From &#x20B9;{(car.price / 24000).toFixed(1)}K/m
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Typography
          sx={{ color: "secondary.light" }}
          variant="body2"
          fontSize="small"
        >
          <LocationOnRoundedIcon sx={{ fontSize: 16 }} />
          Ahmedabad, Gujarat
        </Typography>
      </CardContent>
    </Paper>
  );
}
