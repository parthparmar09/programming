import { Box, InputAdornment, Typography } from "@mui/material";
import { CustomButton, TextInput } from "@features/ui";
import SocialLinks from "./SocialLinks";

function LoginForm({
  toggleLoginPage,
  formStyles,
  formData,
  errors,
  handleChange,
  handleSubmit,
}) {
  return (
    <Box sx={formStyles} component="form" onSubmit={handleSubmit}>
      <Typography variant="h4">Welcome Back.</Typography>
      <Typography align="center" sx={{ mb: 4 }}>
        Continue your journey with TechHub
      </Typography>

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
        Sign In
      </CustomButton>
      <Box sx={{ display: "flex", mt: 3 }}>
        <Typography sx={{ mr: 0.5 }}>No Account?</Typography>
        <Typography
          fontWeight="bold"
          color="primary"
          sx={{ cursor: "pointer", ":hover": { color: "primary.dark" } }}
          onClick={toggleLoginPage}
        >
          Create One
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 3,
          color: "text.secondary",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="subtitle2" sx={{ mr: 0.5 }}>
          Forgot password or trouble signing in?
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Get Help
        </Typography>
      </Box>
      <SocialLinks />
    </Box>
  );
}

export default LoginForm;
