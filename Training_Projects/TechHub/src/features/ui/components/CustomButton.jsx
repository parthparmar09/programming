import { Button, styled } from "@mui/material";

const Btn = styled(Button)(() => ({
  borderRadius: 50,
  boxShadow: "none",
  textTransform: "none",
  padding: "5px 50px",
  fontSize: 14,
  letterSpacing: 0.5,

  "&:hover": {
    boxShadow: "none",
  },
  "&:disabled": {
    opacity: "0.5",
  },
}));

function CustomButton({ children, ...props }) {
  return (
    <Btn {...props} disableElevation size="small">
      {children}
    </Btn>
  );
}

export default CustomButton;
