import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Title({ title }) {
  const { darkMode } = useSelector((state) => state.user);
  return (
    <Typography
      variant="h6"
      fontWeight="bold"
      sx={{
        mb: 2,
        color: darkMode ? "darkgray" : "primary.dark",
      }}
    >
      {title}
    </Typography>
  );
}
