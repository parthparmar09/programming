import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo/logo.png";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const icons = [
  "fa-brands fa-facebook-f ",
  "fa-brands fa-whatsapp ",
  "fa-brands fa-instagram ",
  "fa-brands fa-x-twitter ",
  "fa-brands fa-medium ",
  "fa-brands fa-linkedin-in ",
];

const CustomTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
    border: "1px solid",
    color: "whitesmoke",
    borderColor: "whitesmoke",
  },
}));
export default function Footer() {
  const { darkMode } = useSelector((state) => state.user);
  return (
    <Paper
      sx={{
        color: "whitesmoke",
        bgcolor: darkMode ? "primary" : "primary.main",
      }}
      elevation={5}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            py: 5,
            justifyContent: { md: "center" },
          }}
        >
          <img src={logo} alt="" height="50" style={{ margin: "auto 24px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              mt: { xs: 3, md: 0 },
              ml: { xs: 3, md: 0 },
            }}
          >
            <Box sx={{ mr: 4 }}>
              <Typography fontWeight="bold" sx={{ mb: 1 }}>
                Quick Links
              </Typography>
              <Typography>About Us</Typography>
              <Typography>Contact Us</Typography>
              <Typography>Support</Typography>
            </Box>
            <Box sx={{ mr: 4, mt: { xs: 3, md: 0 } }}>
              <Typography fontWeight="bold" sx={{ mb: 1 }}>
                Contact
              </Typography>
              <Typography>
                <CallRoundedIcon fontSize="small" /> +91 9090990909
              </Typography>

              <Typography>
                <EmailRoundedIcon fontSize="small" /> carhub.support@gmail.com
              </Typography>

              <Typography>
                <LocationOnRoundedIcon fontSize="small" />
                Ahmedabad, Gujarat
              </Typography>
            </Box>
            <Box
              sx={{
                mr: 4,
                display: "flex",
                flexDirection: "column",
                mt: { xs: 3, md: 0 },
              }}
            >
              <Typography fontWeight="bold" sx={{ mb: 1 }}>
                Newsletter
              </Typography>

              <CustomTextField
                fullWidth
                size="small"
                sx={{
                  mb: 1,
                }}
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ color: "whitesmoke" }}
                    >
                      <EmailRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                size="small"
                disableElevation
                sx={{ textTransform: "none", borderRadius: 2 }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ bgcolor: "whitesmoke" }} />
        <Box sx={{ py: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            {icons.map((icon, i) => (
              <IconButton key={i} sx={{ color: "whitesmoke" }}>
                <i className={icon}></i>
              </IconButton>
            ))}
          </Box>
          <Typography align="center" variant="subtitle1">
            &#169;2024 CarHub, All rights reserved
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
