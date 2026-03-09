import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ p: 2, borderTop: 1, borderColor: "divider" }}>
      <Typography textAlign="center" variant="subtitle1">
        &#169;2024 TechHub, All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
