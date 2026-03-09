import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import FactoryRoundedIcon from "@mui/icons-material/FactoryRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EditRoadRoundedIcon from "@mui/icons-material/EditRoadRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import Title from "./Title";

const owners = ["1st", "2nd", "3rd"];
export default function Overview({ car, owner }) {
  const data = [
    {
      icon: <FactoryRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Make Year",
      desc: car.year,
    },
    {
      icon: <TodayRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Reg. Year",
      desc: car.year,
    },
    {
      icon: <EditRoadRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Reg. Number",
      desc: "GJ01 MK4773",
    },

    {
      icon: <SpeedRoundedIcon sx={{ fontSize: 32 }} />,
      title: "KMs Driven",
      desc: `${car.mileage / 1000}K km`,
    },
    {
      icon: <SettingsSuggestRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Transmission",
      desc: car.transmission,
    },
    {
      icon: <LocalGasStationRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Fuel Type",
      desc: car.fuelType,
    },
    {
      icon: <PersonRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Owner",
      desc: owners[car.owner - 1],
    },
    {
      icon: <LocationOnRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Location",
      desc: `${owner.city}, ${owner.state}`,
    },
  ];
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 5,
        p: 4,
        mt: 1,
      }}
    >
      <Title title={"Car Overview"} />
      <Grid container spacing={3}>
        {data.map((d, i) => (
          <Grid key={i} item="true" xs={6} md={4} sx={{ display: "flex" }}>
            {d.icon}

            <Box sx={{ ml: 1 }}>
              <Typography variant="subtitle1">{d.title}</Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {d.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
