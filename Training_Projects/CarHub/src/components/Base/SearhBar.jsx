import { Box, IconButton, Input } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchRounded } from "@mui/icons-material";
import { fetchCars, setFilters } from "../../redux/slices/carSlice";
import { useNavigate } from "react-router-dom";

const StyledInput = styled(Input)({
  "&.MuiInput-underline": {
    "&:before": {
      borderBottom: "none", // Remove the underline before focus
    },
    "&:after": {
      borderBottom: "none", // Remove the underline after focus
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none", // Remove the underline on hover
    },
  },
});

export default function SearchBar() {
  const { filters } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/buy");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 300,
        ml: { xs: 1, md: 3 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid",
          borderColor: "secondary.light",
          borderRadius: 8,
          pl: 2,
          py: { xs: 0, md: 0.5 },
        }}
      >
        <StyledInput
          placeholder="search your car..."
          sx={{ color: "whitesmoke", width: 1 }}
          value={filters.search}
          onChange={(e) => dispatch(setFilters({ search: e.target.value }))}
        />
        <IconButton sx={{ color: "white", px: 1 }} onClick={handleClick}>
          <SearchRounded />
        </IconButton>
      </Box>
    </Box>
  );
}
