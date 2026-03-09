import { Box, Button, Container, Typography } from "@mui/material";
import img from "../../assets/logo/headerimg.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: 500,
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
        color: "whitesmoke",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", alignItems: "center", height: 1 }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
          <Typography variant="h3" fontWeight="bold">
            Get Ready to Rev Up with{" "}
            <Typography
              component="span"
              color="secondary"
              variant="h3"
              fontWeight="bold"
            >
              CarHub
            </Typography>
            .
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            Where Dreams Drive Home!
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Button
              color="secondary"
              variant="contained"
              sx={{
                textTransform: "none",
                fontSize: "large",
                px: 5,
                ":hover": { backgroundColor: "red" },
              }}
              onClick={() => navigate("/buy")}
            >
              Buy A Car
            </Button>
            <Button
              sx={{
                ml: 2,
                fontSize: "large",
                px: 4,
                textTransform: "none",
                ":hover": { backgroundColor: "red" },
              }}
              color="secondary"
              variant="contained"
              onClick={() => navigate("/sell")}
            >
              Sell Your Car
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
