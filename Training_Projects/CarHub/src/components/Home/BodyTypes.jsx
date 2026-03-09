import { Box, Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import bodyTypes from "../../assets/body-types/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCars, setFilters } from "../../redux/slices/carSlice";

export default function BodyTypes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state.user);

  const handleClick = (bodyType) => {
    navigate("/buy");
    dispatch(setFilters({ bodyType: [bodyType] }));
    dispatch(fetchCars());
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Divider textAlign="left">
        <Typography component="span" variant="h5" fontWeight="bold">
          Explore By Body Type
        </Typography>
      </Divider>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {Object.keys(bodyTypes).map((type, index) => (
          <Grid item="true" xs={3} md={2} key={index}>
            <Paper
              elevation={darkMode ? 1 : 0}
              onClick={() => handleClick(type)}
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
              <img src={bodyTypes[type]} alt={type} height="75" width="75" />
              <Typography variant="subtitle1" fontWeight="bold">
                {type}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
