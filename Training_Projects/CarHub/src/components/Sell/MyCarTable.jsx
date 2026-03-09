import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Tooltip,
  Typography,
} from "@mui/material";
import MUIDataTable from "mui-datatables";
import {
  DeleteRounded,
  EditRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import SmallCarousel from "./SmallCarousel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditDilog from "./EditDilog";
import { useCarContext } from "../../context/CarContext";
import { useSelector } from "react-redux";

export default function MyCarTable({ data }) {
  const { darkMode } = useSelector((state) => state.user);
  const buttonStyles = {
    color: darkMode && "grey.main",
  };
  const { deleteCar, modifyCar } = useCarContext();
  const [open, setOpen] = useState(false);
  const [curr, setCurr] = useState();
  const navigate = useNavigate();

  const handleOpen = (data) => {
    setOpen(true);
    setCurr(data);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = (data) => {
    setOpen(false);
    modifyCar(curr[0], data);
  };

  const columns = [
    {
      name: "id",
      label: "",
      options: { display: "excluded", sort: false, filter: false },
    },
    {
      name: "images",
      label: "Images",
      options: {
        sort: false,
        filter: false,
        customBodyRender: () => {
          return (
            <Box sx={{ width: 200 }}>
              <SmallCarousel height={100} />
            </Box>
          );
        },
      },
    },
    {
      name: "model",
      label: "Model",
      options: {
        filter: false,
        sort: false,

        customBodyRender: (value, meta) => {
          const data = meta.tableData[meta.rowIndex];
          return (
            <Box>
              <Typography fontWeight="bold">
                {data[3]} {value}
              </Typography>
              <Typography variant="subtitle1">
                {data[4]} - {data[5]} - {data[6]}
              </Typography>
            </Box>
          );
        },
      },
    },
    {
      name: "brand",
      label: "Brand",
      options: { display: "excluded" },
    },
    {
      name: "year",
      label: "Year",
      options: { display: "excluded", filter: false },
    },
    {
      name: "transmission",
      label: "transmission",
      options: { display: "excluded", sort: false },
    },
    {
      name: "fuelType",
      label: "Fuel",
      options: { display: "excluded", sort: false },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: false,
        sort: false,

        customBodyRender: (value) => {
          return (
            <Box>
              <Typography fontWeight="bold" variant="h6">
                &#x20B9;{value}
              </Typography>
            </Box>
          );
        },
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        sort: false,
        customBodyRender: (value) => {
          return (
            <Chip
              label={value}
              variant={value === "live" ? "outlined" : "filled"}
              color="secondary"
              sx={{ fontWeight: "bold" }}
            />
          );
        },
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, meta) => {
          const data = meta.tableData[meta.rowIndex];
          return (
            <ButtonGroup>
              <Tooltip title="modify">
                <Button onClick={() => handleOpen(data)} sx={buttonStyles}>
                  <EditRounded />
                </Button>
              </Tooltip>
              <Tooltip title="view">
                <Button
                  onClick={() => navigate(`/car/${data[0]}`)}
                  sx={buttonStyles}
                >
                  <VisibilityRounded />
                </Button>
              </Tooltip>
              <Tooltip title="remove">
                <Button onClick={() => deleteCar(data[0])} sx={buttonStyles}>
                  <DeleteRounded />
                </Button>
              </Tooltip>
            </ButtonGroup>
          );
        },
      },
    },
  ];

  const options = {
    filter: false,
    search: false,
    selectableRows: "none",
    print: false,
    download: false,
    viewColumns: false,
    pagination: false,
  };
  return (
    <>
      <MUIDataTable data={data} columns={columns} options={options} />
      {curr && (
        <EditDilog
          open={open}
          handleClose={handleClose}
          data={curr}
          handleConfirm={handleConfirm}
        />
      )}
    </>
  );
}
