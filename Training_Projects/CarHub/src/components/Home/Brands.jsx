import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import brands from "../../assets/brands";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, setFilters } from "../../redux/slices/carSlice";
import { useNavigate } from "react-router-dom";

export default function Brands() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleClick = (brand) => {
    navigate("/buy");
    dispatch(setFilters({ brands: [brand] }));
    dispatch(fetchCars());
  };
  return (
    <Box sx={{ mb: 5 }}>
      <Divider textAlign="left">
        <Typography component="span" variant="h5" fontWeight="bold">
          Explore Popular Brands
        </Typography>
      </Divider>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {Object.keys(brands).map((brand, index) => (
          <Grid item="true" xs={3} md={2} key={index}>
            <Paper
              elevation={darkMode ? 1 : 0}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 3,
                bgcolor: !darkMode && "whitesmoke",
                color: darkMode && "darkgray",
                borderRadius: 5,
                ":hover": {
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  transform: "scale(1.01)",
                  transition: "transform 0.25s ease",
                },
                ":active": {
                  bgcolor: "secondary.light",
                },
              }}
              onClick={() => handleClick(brand)}
            >
              <img src={brands[brand]} alt={brand} height="50" width="50" />
              <Typography variant="subtitle1" fontWeight="bold">
                {brand}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: 5,
            px: 4,
            py: 1.5,
            mt: 2,
          }}
        >
          View all cars
        </Button>
      </Box>
    </Box>
  );
}
