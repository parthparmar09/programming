import { Box, InputAdornment, Typography } from "@mui/material";
import { CustomButton, TextInput } from "@features/ui";
import SocialLinks from "./SocialLinks";

function SignUpForm({
  formStyles,
  toggleLoginPage,
  formData,
  errors,
  handleChange,
  handleSubmit,
}) {
  return (
    <Box sx={formStyles} component="form" onSubmit={handleSubmit}>
      <Typography variant="h4">Join TechHub.</Typography>
      <Typography align="center" sx={{ mb: 4 }}>
        This could be the start of something really huge
      </Typography>
      <TextInput
        sx={{ width: 1 }}
        placeholder="Name"
        name="name"
        value={formData.name}
        error={!!errors.name}
        onChange={handleChange}
        helperText={errors.name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="fa-solid fa-user fa-xl"></i>
            </InputAdornment>
          ),
        }}
      />
      <TextInput
        sx={{ width: 1 }}
        placeholder="Email"
        name="email"
        value={formData.email}
        error={!!errors.email}
        onChange={handleChange}
        helperText={errors.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="fa-solid fa-envelope fa-xl"></i>
            </InputAdornment>
          ),
        }}
      />
      <TextInput
        sx={{ width: 1 }}
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        error={!!errors.password}
        onChange={handleChange}
        helperText={errors.password}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="fa-solid fa-key  fa-xl"></i>
            </InputAdornment>
          ),
        }}
      />
      <CustomButton variant="contained" type="submit">
        Sign Up
      </CustomButton>

      <Box sx={{ display: "flex", mt: 3 }}>
        <Typography sx={{ mr: 0.5 }}>Already Have an Account?</Typography>
        <Typography
          fontWeight="bold"
          color="primary"
          sx={{ cursor: "pointer", ":hover": { color: "primary.dark" } }}
          onClick={toggleLoginPage}
        >
          Sign In
        </Typography>
      </Box>
      <SocialLinks />
    </Box>
  );
}

export default SignUpForm;
