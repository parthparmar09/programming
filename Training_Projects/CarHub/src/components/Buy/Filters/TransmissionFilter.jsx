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

const transmissionTypes = ["Automatic", "Manual"];

export default function TransmissionFilter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.cars);

  const handleCheckboxChange = (value) => {
    let prev = filters.transmission;
    if (prev.includes(value)) {
      prev = prev.filter((item) => item !== value);
    } else {
      prev = [...prev, value];
    }
    dispatch(setFilters({ transmission: prev }));
    dispatch(fetchCars());
  };
  return (
    <Box sx={{ p: 2 }}>
      <Typography fontWeight="bold">Transmission</Typography>
      <List dense>
        {transmissionTypes.map((value) => (
          <ListItem key={value} disablePadding>
            <ListItemButton
              sx={{ p: 0 }}
              onClick={() => handleCheckboxChange(value)}
            >
              <FormControlLabel
                sx={{ height: 1, width: 1, pl: 2 }}
                control={
                  <Checkbox
                    checked={filters.transmission.includes(value)}
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
