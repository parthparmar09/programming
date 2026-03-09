import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(() => ({
  marginBottom: 15,

  "& .MuiOutlinedInput-root": {
    borderRadius: 50,
    padding: 3,
    paddingLeft: 15,
  },
  "& .MuiInputAdornment-positionStart": {
    paddingRight: 5,
  },
}));

function TextInput({ ...props }) {
  return <CustomTextField variant="outlined" size="small" {...props} />;
}

export default TextInput;
