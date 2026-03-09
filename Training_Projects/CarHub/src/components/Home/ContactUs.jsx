import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import contact from "../../assets/buy-guide/contact.png";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styled from "@emotion/styled";

export default function ContactUs() {
  const CustomTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: 20,
      "&:hover fieldset": {
        borderColor: "primary.dark",
      },
      "&.Mui-focused fieldset": {
        borderColor: "primary.dark",
      },
    },
  }));
  return (
    <Box sx={{ mb: 5 }} id="contact">
      <Divider textAlign="left">
        <Typography component="span" variant="h5" fontWeight="bold">
          Contact Us
        </Typography>
      </Divider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CustomTextField
            sx={{
              m: 1,
              width: "50ch",
            }}
            placeholder="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
          <CustomTextField
            sx={{ m: 1, width: "50ch" }}
            placeholder="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
          <CustomTextField
            multiline
            rows={3}
            sx={{ m: 1, width: "50ch" }}
            placeholder="Message"
          />
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            endIcon={<SendRoundedIcon />}
            sx={{ textTransform: "none", borderRadius: 5, width: "98% ", m: 1 }}
          >
            Send Message
          </Button>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={contact} alt="contact" height="400" />
        </Box>
      </Box>
    </Box>
  );
}
