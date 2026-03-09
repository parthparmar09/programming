import styled from "@emotion/styled";
import { Slider } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import Title from "./Title";

export const CustomSlider = styled(Slider)(({ theme }) => ({
  height: 5,
  padding: "10px 0",
  "& .MuiSlider-thumb": {
    backgroundColor: theme.palette.primary.dark,
    border: "2px solid white",
  },
  "& .MuiSlider-track": {
    backgroundColor: theme.palette.primary.dark,
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
  },
}));

function calculateEMI(
  principal,
  annualInterestRate,
  downPayment,
  tenureMonths
) {
  const loanAmount = principal - downPayment;

  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, tenureMonths)) /
    (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
  return emi.toFixed(0);
}

export default function EmiCalc({ price }) {
  const [priceRange, setPriceRange] = useState(price / 2);
  const [tenure, setTenure] = useState(36);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const emi = calculateEMI(price, 12.8, priceRange, tenure);
    setEmi(emi);
  }, [priceRange, tenure]);

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: 5, p: 4, mt: 3, color: "primary" }}
    >
      <Title title={"EMI Calculator"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 1,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          align="center"
          color="secondary"
        >
          &#x20B9;{emi}/month
        </Typography>
        <Typography variant="body1" align="center">
          at <strong>12.8%</strong> p.a.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Typography fontWeight="bold" variant="body2">
            Down Payment
          </Typography>
          <Typography fontWeight="bold" variant="body2">
            &#x20B9;{priceRange}
          </Typography>
        </Box>
        <CustomSlider
          valueLabelDisplay="off"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          min={0}
          max={price}
          step={10000}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2">&#x20B9;0</Typography>
          <Typography variant="subtitle2">&#x20B9;{price}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight="bold" variant="body2">
            Tenure
          </Typography>
          <Typography fontWeight="bold" variant="body2">
            {tenure} Months
          </Typography>
        </Box>
        <CustomSlider
          valueLabelDisplay="off"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          min={0}
          max={72}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2">0 Months</Typography>
          <Typography variant="subtitle2">{72} Months</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
