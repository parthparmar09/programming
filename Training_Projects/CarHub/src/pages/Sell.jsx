import { Box, Button, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MyCarTable from "../components/Sell/MyCarTable";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCarContext } from "../context/CarContext";
import SellDilog from "../components/Sell/SellDilog";
import Loader from "../components/Base/Loader";
import toast from "react-hot-toast";

const initial = {
  model: "",
  brand: "",
  year: "",
  mileage: "",
  owner: "",
  price: "",
  fuelType: "",
  bodyType: "",
  transmission: "",
  status: "live",
};
export default function Sell() {
  const { user } = useSelector((state) => state.user);
  const { cars, getCars, addCar, loading } = useCarContext();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(initial);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setData(initial);
    setOpen(false);
  };
  const handleConfirm = (data) => {
    if (
      !data.model ||
      !data.fuelType ||
      !data.transmission ||
      !data.brand ||
      !data.mileage ||
      !data.year
    ) {
      toast.error("Required fields can't be empty");
      return;
    }
    addCar({ ...data, owner_id: user.id });
    setOpen(false);
    setData(initial);
  };
  useEffect(() => {
    getCars(user.id);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box sx={{ my: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography sx={{}} fontWeight="bold" variant="h6">
              My Cars
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              sx={{ textTransform: "none", px: 5 }}
              startIcon={<AddRoundedIcon />}
              size="large"
              onClick={() => setOpen(true)}
            >
              Sell Car
            </Button>
          </Box>
          {cars?.length > 0 ? (
            <MyCarTable data={cars} />
          ) : (
            <Typography sx={{ my: 5 }}>
              You have not advertised any car for sale.
            </Typography>
          )}
        </Box>
      )}
      <SellDilog
        open={open}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        handleChange={handleChange}
        data={data}
      />
    </>
  );
}
