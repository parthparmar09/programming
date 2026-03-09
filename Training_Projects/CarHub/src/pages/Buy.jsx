import { Box } from "@mui/material";
import FilterSection from "../components/Buy/FilterSection";
import DisplaySection from "../components/Buy/DisplaySection";

export default function Buy() {
  return (
    <Box sx={{ display: "flex", my: 2, position:"relative" }}>
      <FilterSection />
      <DisplaySection />
    </Box>
  );
}
