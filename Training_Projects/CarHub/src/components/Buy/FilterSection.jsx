import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import PriceFilter from "./Filters/PriceFilter";
import BrandFilter from "./Filters/BrandFilter";
import BodyTypeFilter from "./Filters/BodyTypeFilter";
import FuelTypeFilter from "./Filters/FuelTypeFilter";
import TransmissionFilter from "./Filters/TransmissionFilter";
import KMsFilter from "./Filters/KMsFilter";
import { resetFilters } from "../../redux/slices/carSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FilterSection() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.user);
  return (
    <Paper
      elevation={darkMode ? 1 : 0}
      id="filterSection"
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        width: "30%",
        bgcolor: !darkMode && "grey.main",
        border: "1px solid",
        borderColor: darkMode ? "transparent" : "secondary.light",
        borderRadius: 5,
        mt: 1,
        maxHeight: "85vh",
        overflowY: "scroll",
        overflowX: "hidden",
        position: "sticky",
        top: 84,
      }}
    >
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography fontWeight="bold">Filters</Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => dispatch(resetFilters())}
        >
          Reset
        </Button>
      </Box>
      <PriceFilter /> <Divider sx={{ color: "secondary.light" }} />
      <BrandFilter />
      <Divider sx={{ color: "secondary.light" }} />
      <BodyTypeFilter />
      <Divider sx={{ color: "secondary.light" }} />
      <KMsFilter />
      <Divider sx={{ color: "secondary.light" }} />
      <FuelTypeFilter />
      <Divider sx={{ color: "secondary.light" }} />
      <TransmissionFilter />
    </Paper>
  );
}
