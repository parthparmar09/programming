import { Box, TextField, Typography } from "@mui/material";

export default function TextArea({ data, handleChange, name, title, type }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography fontWeight="bold">{title}*</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Please enter..."
        type={type}
        name={name}
        value={data[name]}
        onChange={handleChange}
      />
    </Box>
  );
}
