// ThemeContext.js
import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        light: "#6a1b9a",
        main: "#9c27b0",
        dark: "#d05ce3",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ffb74d",
        main: "#ff9800",
        dark: "#f57c00",
        contrastText: "#fff",
      },
    },

    typography: {
      fontFamily: "Ubuntu",
    },
  });

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
