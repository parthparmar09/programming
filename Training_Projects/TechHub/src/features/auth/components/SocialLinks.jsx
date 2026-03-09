import { Box, Divider, IconButton, Tooltip, Typography } from "@mui/material";

const SocialIcons = {
  Google: <i className="fa-brands fa-google"></i>,
  Apple: <i className="fa-brands fa-apple "></i>,
  Facebook: <i className="fa-brands fa-facebook-f"></i>,
  Twitter: <i className="fa-brands fa-x-twitter"></i>,
  LinkedIn: <i className="fa-brands fa-linkedin-in"></i>,
  Medium: <i className="fa-brands fa-medium"></i>,
};

function SocialLinks() {
  return (
    <Box sx={{ width: 1, mt: 3 }}>
      <Divider textAlign="center" sx={{ mb: 2 }}>
        <Typography variant="subtitle1" color="text.secondary">
          or continue with
        </Typography>
      </Divider>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {Object.keys(SocialIcons).map((icon, i) => (
          <IconButton
            disableRipple
            key={i}
            sx={{
              mx: { xs: 0.5, lg: 1 },
              ":hover": {
                color: "text.primary",
              },
            }}
          >
            <Tooltip title={icon}>{SocialIcons[icon]}</Tooltip>
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

export default SocialLinks;
