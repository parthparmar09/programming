// import { useParams } from "react-router-dom";
import Price from "../components/Car/Price";
import Overview from "../components/Car/Overview";
import ImageCarousel from "../components/Car/ImageCarousel";
import { Box } from "@mui/material";
import Specifications from "../components/Car/Specifications";
import EmiCalc from "../components/Car/EmiCalc";
import { useParams } from "react-router-dom";
import Loader from "../components/Base/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Car() {
  const { id } = useParams();
  const [carData, setCarData] = useState({});
  const [loading, setLoading] = useState(true);
  const { darkMode } = useSelector((state) => state.user);

  const fetchCar = () => {
    axios
      .get(`/api/cars/${id}`)
      .then((res) => {
        setCarData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchCar();
  }, []);

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <Box
      sx={{
        my: 2,
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        color: darkMode ? "grey.main" : "primary.dark",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "65%" } }}>
        <ImageCarousel />
        <Box sx={{ display: { xs: "block", md: "none" }, my: 1 }}>
          <Price car={carData.car} owner={carData.owner} />
        </Box>
        <Overview car={carData.car} owner={carData.owner} />
        <Specifications />
        <Box sx={{ display: { xs: "block", md: "none" }, my: 1 }}>
          <EmiCalc price={carData.car?.price} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "33%",
          display: { xs: "none", md: "block" },
        }}
      >
        <Price car={carData.car} owner={carData.owner} />
        <EmiCalc price={carData.car?.price} />
      </Box>
    </Box>
  );
}
