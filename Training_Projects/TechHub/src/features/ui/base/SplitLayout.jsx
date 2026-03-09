import { Box, Container } from "@mui/material";
import { SideSection } from "../";

function SplitLayout({ children }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        p: 2,
        mb: 5,
        display: "flex",
      }}
    >
      <Box
        id="main-content"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          width: { xs: 1, md: "70%" },
          pr: { md: 3 },
        }}
      >
        {children}
      </Box>
      <SideSection
        sx={{
          borderLeft: 1,
          borderColor: "divider",
          position: "sticky",
          top: 72,
          maxHeight: "90vh",
          overflowY: "scroll",
          display: { xs: "none", md: "flex" },
        }}
      />
    </Container>
  );
}

export default SplitLayout;
