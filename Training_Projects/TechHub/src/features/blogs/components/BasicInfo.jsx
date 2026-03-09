import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { categories } from "@constants";

function InputBase({ title, children }) {
  return (
    <Box sx={{ display: "flex", width: { xs: 1, md: "60%" }, mb: 2 }}>
      <Typography sx={{ width: "30%" }}>{title} :</Typography>
      {children}
    </Box>
  );
}

function BasicInfo({ data, handleChange, errors }) {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        value={data?.title}
        name="title"
        autoFocus={true}
        error={errors.title}
        helperText={errors.title}
        variant="standard"
        placeholder="Title"
        sx={{
          mb: 2.5,
          width: { xs: 1, md: "60%" },

          "& .MuiInputBase-input": {
            fontSize: 36,
            padding: "0",
          },
        }}
      />

      <InputBase title="Cover URL">
        <TextField
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={data?.coverUrl}
          name="coverUrl"
          fullWidth
          variant="standard"
          placeholder="https://example.com/img.jpg"
          size="small"
          error={errors.coverUrl}
          helperText={errors.coverUrl}
        />
      </InputBase>
      <InputBase title="Category">
        <Autocomplete
          disablePortal
          onChange={(e, val) => handleChange("category", val)}
          value={data?.category}
          options={categories}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="select a category for your blog"
              size="small"
              variant="standard"
              error={errors.category}
              helperText={errors.category}
            />
          )}
        />
      </InputBase>
    </Box>
  );
}

export default BasicInfo;
