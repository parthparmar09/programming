import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector } from "react-redux";

export default function EditDilog({ open, handleClose, handleConfirm, data }) {
  const [price, setPrice] = useState("");
  const { darkMode } = useSelector((state) => state.user);

  useEffect(() => {
    setPrice(data[7]);
  }, [data]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Modify Your Ad.</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Not getting enough responses? Try reducing the price.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mr: 1 }} fontWeight="bold">
              Price:
            </Typography>
            <TextField
              type="number"
              size="small"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Already found your deal? Time to close the ad.
          </Typography>
          <Button
            disableElevation
            variant="contained"
            color="secondary"
            onClick={() => handleConfirm({ status: "sold" })}
          >
            Mark Sold
          </Button>
        </Box>
      </DialogContent>
      <Box sx={{ px: 3, my: 2 }}>
        <Button
          onClick={() => handleConfirm({ price })}
          sx={{ width: "30%" }}
          variant="contained"
        >
          Confirm
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            width: "30%",
            ml: 2,
            color: darkMode && "grey.main",
          }}
        >
          Cancel
        </Button>
      </Box>
    </Dialog>
  );
}
