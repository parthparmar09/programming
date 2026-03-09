import { createTheme } from "@mui/material";

export default function getTheme(darkMode) {
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#222831",
        dark: "#393E46",
        light: "#EEEEEE",
      },
      secondary: {
        dark: "red",
        main: "#eb2f20",
        light: "#B9B9B9",
      },
      grey: { light: "#eaeaea", main: "#f5f5f5" },
    },

    typography: {
      fontFamily: "Space Grotesk",
    },
  });
  return theme;
}
