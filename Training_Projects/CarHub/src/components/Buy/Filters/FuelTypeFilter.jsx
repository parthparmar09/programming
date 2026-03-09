import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, setFilters } from "../../../redux/slices/carSlice";

const fuelTypes = ["Petrol", "Diesel", "Electric"];

export default function FuelTypeFilter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.cars);

  const handleCheckboxChange = (value) => {
    let prev = filters.fuelType;
    if (prev.includes(value)) {
      prev = prev.filter((item) => item !== value);
    } else {
      prev = [...prev, value];
    }
    dispatch(setFilters({ fuelType: prev }));
    dispatch(fetchCars());
  };
  return (
    <Box sx={{ p: 2 }}>
      <Typography fontWeight="bold">Fuel Type</Typography>
      <List dense>
        {fuelTypes.map((value) => (
          <ListItem key={value} disablePadding>
            <ListItemButton sx={{ p: 0 }}>
              <FormControlLabel
                sx={{ height: 1, width: 1, pl: 2 }}
                onClick={() => handleCheckboxChange(value)}
                control={
                  <Checkbox
                    checked={filters.fuelType.includes(value)}
                    edge="start"
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
