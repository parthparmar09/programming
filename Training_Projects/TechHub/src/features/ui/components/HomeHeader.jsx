import { Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import png from "../../../assets/header-png.png";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <Box
      // bgcolor="secondary.dark"
      className="flex-centered"
      sx={{
        height: { xs: 400, md: 600 },
        pl: { xs: 3, md: 0 },
        justifyContent: "space-evenly",
        background:
          "linear-gradient(90deg, rgba(245,124,0,1) 20%, rgba(255,152,0,1) 75% ,rgba(255,183,77,1) 100% )",
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Stay Curious.
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Discover the best in the ever evolving tech world
          <br /> with, TechHub.
        </Typography>
        <Link to="/explore">
          <CustomButton variant="contained" sx={{ p: 1, px: 5 }}>
            Start Reading
          </CustomButton>
        </Link>
      </Box>
      <Box
        component="img"
        sx={{ height: 400, display: { xs: "none", md: "block" } }}
        src={png}
      ></Box>
    </Box>
  );
}

export default HomeHeader;
