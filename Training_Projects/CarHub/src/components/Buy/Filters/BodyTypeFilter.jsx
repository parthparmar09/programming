import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import bodyTypes from "../../../assets/body-types/index";
import { fetchCars, setFilters } from "../../../redux/slices/carSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BodyTypeFilter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.cars);

  const handleCheckboxChange = (value) => {
    let prev = filters.bodyType;
    if (prev.includes(value)) {
      prev = prev.filter((item) => item !== value);
    } else {
      prev = [...prev, value];
    }
    dispatch(setFilters({ bodyType: prev }));
    dispatch(fetchCars());
  };
  return (
    <Box sx={{ p: 2 }}>
      <Typography fontWeight="bold">Body Type</Typography>
      <List dense>
        {Object.keys(bodyTypes).map((value) => (
          <ListItem key={value} disablePadding>
            <ListItemButton
              sx={{ p: 0 }}
              onClick={() => handleCheckboxChange(value)}
            >
              <FormControlLabel
                sx={{ height: 1, width: 1, pl: 2 }}
                control={
                  <Checkbox
                    checked={filters.bodyType.includes(value)}
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
