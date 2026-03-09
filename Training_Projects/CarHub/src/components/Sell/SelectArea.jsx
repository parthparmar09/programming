import { Box, MenuItem, Select, Typography } from "@mui/material";

export default function SelectArea({
  name,
  title,
  data,
  handleChange,
  values,
}) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography fontWeight="bold">{title}*</Typography>
      <Select
        fullWidth
        displayEmpty
        size="small"
        value={data[name]}
        name={name}
        onChange={handleChange}
        renderValue={(selected) => {
          if (!selected) {
            return <em>Please select...</em>;
          }
          return selected;
        }}
      >
        <MenuItem disabled value="">
          <em>Please select...</em>
        </MenuItem>
        {values.map((v, i) => (
          <MenuItem key={i} value={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
