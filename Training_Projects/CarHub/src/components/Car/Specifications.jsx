import { AccordionDetails, Grid } from "@mui/material";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Title from "./Title";
import carSpecs from "../../data/carSpecs.json";

export default function Specifications() {
  return (
    <Paper elevation={3} sx={{ borderRadius: 5, p: 4, mt: { xs: 1, md: 3 } }}>
      <Title title={"Car Specifications"} />

      <Box>
        {Object.keys(carSpecs).map((k, i) => (
          <Accordion key={i} elevation={0} sx={{ bgcolor: "inherit" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">{k}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                {Object.keys(carSpecs[k]).map((d, i) => (
                  <Grid
                    key={i}
                    item={true}
                    xs={6}
                    md={4}
                    sx={{ display: "flex" }}
                  >
                    <Box sx={{ ml: 1 }}>
                      <Typography variant="subtitle2">{d}</Typography>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {carSpecs[k][d]}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
}
