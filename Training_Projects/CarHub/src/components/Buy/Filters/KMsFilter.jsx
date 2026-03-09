import { Box, Typography } from "@mui/material";
import { CustomSlider } from "./PriceFilter";
import { useEffect, useState } from "react";
import { setFilters } from "../../../redux/slices/carSlice";
import { useDispatch } from "react-redux";

export default function KMsFilter() {
  const dispatch = useDispatch();
  const [kmRange, setkmRange] = useState([0, 100000]);

  useEffect(() => {
    dispatch(setFilters({ kmsDriven: kmRange }));
  }, [kmRange]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography fontWeight="bold">KMs Driven</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "secondary.main",
          }}
        >
          <Typography fontWeight="bold">{kmRange[0]} km</Typography>
          <Typography fontWeight="bold">{kmRange[1]} km</Typography>
        </Box>
        <CustomSlider
          valueLabelDisplay="off"
          value={kmRange}
          onChange={(e) => setkmRange(e.target.value)}
          min={0}
          max={100000}
          step={10000}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "primary",
          }}
        >
          <Typography variant="subtitle2">Min</Typography>
          <Typography variant="subtitle2">Max</Typography>
        </Box>
      </Box>
    </Box>
  );
}
