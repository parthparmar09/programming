import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const questions = {
  "Q. How do I buy a car?":
    "The process of buying a car is very simple at CarHub. Select the car of your choice, make an offer to the seller via our messaging system or connect with the seller directly on a call and get your deal done.",
  "Q. How do I sell my car?":
    "Navigate to the 'sell car' page and fill out a simple form for your car by providing neccesary information and you are done. Interested buyers will contact you directly via our messaging sytem or call.",
  "Q. Why buy a used car from CarHub?":
    "CarHub takes the uncertainty and risk out of buying a used car, offering peace of mind at every step with zero compromises. Experience a simple & fully transparent way of buying used cars with CarHub. Find your perfect match from our wide range of fully inspected & certified used cars at the best prices. With CarHub, pre-owned is better than new. All this through a transparent, convenient and trustworthy process, to make sure you buy a car you'll love, guaranteed.",
  "Q. What if I get scammed, are the sellers legit?":
    "We are really proud to declare that all of the sellers on CarHub are legit and verfied. All of the advertisements posted on CarHub are thoroughly examined and verified through a 200+ step verification system. However, if any of the buyer or seller feels like they are being scammed or there is a fraud , they can always reach out to us. Our helplines are open 24/7.",
};
export default function Faqs() {
  return (
    <Box sx={{ mb: 5 }} id="faqs">
      <Divider textAlign="left">
        <Typography component="span" variant="h5" fontWeight="bold">
          Frequently Asked Questions
        </Typography>
      </Divider>
      <Box sx={{ mt: 2 }}>
        {Object.keys(questions).map((q, i) => (
          <Accordion key={i} elevation={0} sx={{ bgcolor: "inherit" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontWeight="bold">{q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{questions[q]}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
