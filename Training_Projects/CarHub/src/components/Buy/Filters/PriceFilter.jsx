import { Box, Slider, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../redux/slices/carSlice";

export const CustomSlider = styled(Slider)(() => ({
  color: "secondary.main",
  height: 5,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    backgroundColor: "secondary.main",
    border: "2px solid white",
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
  },
}));

export default function PriceFilter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.cars);
  const [priceRange, setPriceRange] = useState(filters.price);

  useEffect(() => {
    dispatch(setFilters({ price: priceRange }));
  }, [priceRange]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography fontWeight="bold">Price Range</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "secondary.main",
          }}
        >
          <Typography fontWeight="bold">&#x20B9;{priceRange[0]}</Typography>
          <Typography fontWeight="bold">&#x20B9;{priceRange[1]}</Typography>
        </Box>
        <CustomSlider
          valueLabelDisplay="off"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          min={100000}
          max={10000000}
          step={100000}
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
