import { Box, Tooltip, useTheme } from "@mui/material";
import { useThemeContext } from "@hooks";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useThemeContext();
  const theme = useTheme();
  return (
    <Tooltip title="Toggle Theme">
      <Box className="flex-centered" sx={{ mr: { xs: 2, lg: 3 } }}>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={25}
          moonColor={theme.palette.primary.main}
          sunColor={theme.palette.secondary.main}
        />
      </Box>
    </Tooltip>
  );
}

export default DarkModeToggle;
