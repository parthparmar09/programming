import styled from "@emotion/styled";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CarCard from "./CarCard";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, sortCars } from "../../redux/slices/carSlice";

const SortValues = {
  Relevance: ["id", false],
  "Price - Increasing": ["price", false],
  "Price - Decreasing": ["price", true],
  "KM(s) Driven": ["mileage", false],
  "Year - New to Old": ["year", true],
  "Year - Old to New": ["year", false],
};

export default function DisplaySection() {
  const StyledSelect = styled(Select)({
    "&.MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "secondary.light",
      },
      "&.Mui-focused fieldset": {
        borderColor: "secondary.light",
      },
    },
  });

  const { cars, loading, filters } = useSelector((state) => state.cars);
  const { darkMode } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [sortValue, setSortValue] = useState("Relevance");

  useEffect(() => {
    dispatch(sortCars(SortValues[sortValue]));
  }, [sortValue]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [filters]);
  return (
    <Box
      id="displaySection"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 1,
        ml: { xs: 0, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ display: { xs: "none", md: "block" } }} variant="h6">
          <Typography
            fontWeight="bold"
            color="secondary"
            variant="h6"
            component="span"
          >
            {cars?.length}
          </Typography>{" "}
          Used cars found
        </Typography>
        <Button
          sx={{
            display: { xs: "flex", md: "none" },
            textTransform: "none",
            fontWeight: "bold",
          }}
          endIcon={<FilterAltRoundedIcon />}
          variant="outlined"
        >
          Filter
        </Button>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography fontWeight="bold" sx={{ mr: 1 }}>
            Sort:
          </Typography>
          <StyledSelect
            size="small"
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
            defaultValue="Relevance"
            sx={{
              width: { md: 200 },
              fontWeight: "bold",
              color: darkMode ? "grey.light" : "primary.main",
            }}
          >
            {Object.keys(SortValues).map((sort, i) => (
              <MenuItem key={i} value={sort}>
                {sort}
              </MenuItem>
            ))}
          </StyledSelect>
        </Box>
      </Box>
      <Grid container sx={{ mt: 1 }} spacing={2}>
        {!loading
          ? cars?.map((car) => (
              <Grid key={car.id} item="true" xs={12} md={6} lg={4}>
                <CarCard car={car} />
              </Grid>
            ))
          : Array.from({ length: 9 }).map((a, i) => (
              <Grid key={i} item="true" xs={12} md={6} lg={4}>
                <Skeleton
                  variant="rectangular"
                  height={280}
                  sx={{ borderRadius: 5 }}
                />
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}
