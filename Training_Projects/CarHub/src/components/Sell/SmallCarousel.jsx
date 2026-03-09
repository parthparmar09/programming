import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import images from "../../assets/cars";

function Item({ image, height }) {
  return (
    <Paper
      sx={{
        height,
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
        zIndex: 0,
      }}
    ></Paper>
  );
}

export default function SmallCarousel({ height }) {
  return (
    <Carousel
      animation="slide"
      height={height}
      duration={500}
      autoPlay={false}
      indicators={false}
    >
      {images.map((image, i) => (
        <Item key={i} image={image} height={height} />
      ))}
    </Carousel>
  );
}
