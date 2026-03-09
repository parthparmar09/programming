import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import brands from "../../../assets/brands/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, setFilters } from "../../../redux/slices/carSlice";

export default function BrandFilter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.cars);

  const handleCheckboxChange = (value) => {
    let prev = filters.brands;
    if (prev.includes(value)) {
      prev = prev.filter((item) => item !== value);
    } else {
      prev = [...prev, value];
    }
    dispatch(setFilters({ brands: prev }));
    dispatch(fetchCars());
  };
  return (
    <Box sx={{ p: 2 }}>
      <Typography fontWeight="bold">Brands</Typography>
      <List sx={{ maxHeight: 300, overflowY: "scroll" }} dense>
        {Object.keys(brands).map((value) => (
          <ListItem key={value} disablePadding>
            <ListItemButton
              sx={{ p: 0 }}
              onClick={() => handleCheckboxChange(value)}
            >
              <FormControlLabel
                sx={{ height: 1, width: 1, pl: 2 }}
                control={
                  <Checkbox
                    edge="start"
                    checked={filters.brands.includes(value)}
                    sx={{
                      "&.Mui-checked": {
                        color: "secondary.main",
                      },
                    }}
                  />
                }
                label={value}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
