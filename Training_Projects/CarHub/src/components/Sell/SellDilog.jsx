import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import brands from "../../assets/brands";
import bodyTypes from "../../assets/body-types/index.js";
import { CloseRounded, CloudUpload, CurrencyRupee } from "@mui/icons-material";
import styled from "@emotion/styled";
import SelectArea from "./SelectArea.jsx";
import TextArea from "./TextArea.jsx";
import { useSelector } from "react-redux";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function SellDilog({
  open,
  handleClose,
  handleConfirm,
  handleChange,
  data,
}) {
  const { darkMode } = useSelector((state) => state.user);
  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle>Publish an Advertisement</DialogTitle>
        <IconButton onClick={handleClose} sx={{ mr: 2 }}>
          <CloseRounded />
        </IconButton>
      </Box>
      <Container maxWidth="sm">
        <DialogContent>
          <Typography>
            Please enter your car details by completing the fields below:
          </Typography>
          <Typography fontSize="small" fontStyle="italic">
            Note: fields with *(asterik) are required
          </Typography>
          <Divider sx={{ my: 2 }} />
          <TextArea
            name={"registration"}
            title={"Vehicle Registration"}
            data={data}
            handleChange={handleChange}
            type={"text"}
          />
          <SelectArea
            name={"brand"}
            title={"Brand"}
            data={data}
            handleChange={handleChange}
            values={Object.keys(brands)}
          />

          <TextArea
            name={"model"}
            title={"Model"}
            data={data}
            handleChange={handleChange}
            type={"text"}
          />
          <TextArea
            name={"year"}
            title={"Year"}
            data={data}
            handleChange={handleChange}
            type={"number"}
          />
          <SelectArea
            name={"bodyType"}
            title={"Body Type"}
            data={data}
            handleChange={handleChange}
            values={Object.keys(bodyTypes)}
          />
          <TextArea
            name={"mileage"}
            title={"KMs Driven"}
            data={data}
            handleChange={handleChange}
            type={"number"}
          />
          <SelectArea
            name={"transmission"}
            title={"Transmission"}
            data={data}
            handleChange={handleChange}
            values={["Automatic", "Manual"]}
          />
          <SelectArea
            name={"fuelType"}
            title={"Fuel Type"}
            data={data}
            handleChange={handleChange}
            values={["Petrol", "Diesel", "Electric"]}
          />
          <SelectArea
            name={"owner"}
            title={"No. of Owners"}
            data={data}
            handleChange={handleChange}
            values={[1, 2, 3, 4, 5]}
          />

          <Box sx={{ mb: 2 }}>
            <Typography fontWeight="bold">{"Asking Price*"}</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Please enter..."
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupee />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight="bold" sx={{ mr: 2 }}>
              Images
            </Typography>
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUpload />}
              sx={{
                borderColor: darkMode ? "grey.main" : "primary",
                color: darkMode ? "grey.main" : "primary",
              }}
            >
              Upload
              <VisuallyHiddenInput type="file" multiple />
            </Button>
          </Box>
        </DialogContent>
        <Box sx={{ px: 2, mb: 2 }}>
          <Button
            onClick={() => handleConfirm(data)}
            variant="contained"
            color="secondary"
            sx={{ width: "30%" }}
          >
            Publish
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              ml: 2,
              width: "30%",
              color: darkMode && "grey.main",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </Dialog>
  );
}
