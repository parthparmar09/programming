import { Box, Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCars, setFilters } from "../../redux/slices/carSlice";

const prices = {
  "Below 5 Lakhs": [0, 500000],
  "5 to 10 Lakhs": [500000, 1000000],
  "10 to 50 Lakhs": [1000000, 5000000],
  "Above 50 Lakhs": [5000000, 10000000],
};

export default function Price() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state.user);
  const handleClick = (price) => {
    navigate("/buy");
    dispatch(setFilters({ price: prices[price] }));
    dispatch(fetchCars());
  };
  return (
    <Box sx={{ mb: 5 }}>
      <Divider textAlign="left">
        <Typography component="span" variant="h5" fontWeight="bold">
          For Your Budget
        </Typography>
      </Divider>
      <Grid container sx={{ mt: 1 }} spacing={3}>
        {Object.keys(prices).map((k, i) => (
          <Grid key={i} item="true" xs={12} md={6}>
            <Paper
              elevation={darkMode ? 1 : 0}
              onClick={() => handleClick(k)}
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
            >
              <Typography fontWeight="bold">{k}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
