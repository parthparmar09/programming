import { Box, Typography } from "@mui/material";
import gifs from "../../assets/buy-guide";

const data = [
  {
    title: "Choose from the best pre-owned cars.",
    secondary: "10,000+ fully inspected cars online",
  },
  {
    title: "Connect with the seller and make your offer.",
    secondary: "make the offer of your choice",
  },
  {
    title: "Make payments, get your deal done.",
    secondary: "customized EMI plans available",
  },
];

export default function BuyGuide() {
  return (
    <Box
      sx={{
        my: 5,
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="span" variant="h5" fontWeight="bold">
        How{" "}
        <Typography
          component="span"
          variant="h4"
          fontWeight="bold"
          color="secondary"
        >
          CarHub
        </Typography>{" "}
        works?
      </Typography>
      <Typography>
        You won{"'"}t just love our cars, you{"'"}ll love the way you buy them.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: 1,
        }}
      >
        {data.map((d, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ borderRadius: 8, overflow: "hidden" }}>
              <img src={gifs[i]} alt="gif" height="300" />
            </Box>
            <Typography fontWeight="bold">{d.title}</Typography>
            <Typography>{d.secondary}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
