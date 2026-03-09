import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import images from "../../assets/cars/index";

function Item({ image }) {
  return (
    <Paper
      sx={{
        borderRadius: 5,
        height: { xs: 250, md: 400 },
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
        zIndex: 0,
      }}
      elevation={3}
    ></Paper>
  );
}

export default function ImageCarousel() {
  return (
    <Carousel
      animation="slide"
      autoPlay={false}
      duration={500}
      navButtonsAlwaysVisible
      fullHeightHover={false}
      NavButton={({ onClick, className, style, next, prev }) => {
        return (
          <IconButton
            onClick={onClick}
            sx={{
              mt: 4,
              color: "whitesmoke",
              fontSize: "large",
              mx: 1,
            }}
            size="large"
          >
            {next && <ArrowForwardIosRoundedIcon />}
            {prev && <ArrowBackIosNewRoundedIcon />}
          </IconButton>
        );
      }}
    >
      {images.map((image, i) => (
        <Item key={i} image={image} />
      ))}
    </Carousel>
  );
}
