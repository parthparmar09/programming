import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const pages = [
  { path: "/buy", name: "Buy Car" },
  { path: "/sell", name: "Sell Car" },
  { path: "/chats", name: "Chats" },
  { path: "/#faqs", name: "FAQs" },
];

export default function SmallNavBar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        display: { sx: "block", md: "none" },
        top: 55,
        backgroundColor: "primary.dark",
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          p: 0,
        }}
      >
        {pages.map((page) => (
          <Button
            size="small"
            key={page.path}
            onClick={() => {
              navigate(page.path);
            }}
            sx={{
              ml: 2,
              height: 1,
              color:
                window.location.pathname === page.path
                  ? "secondary.main"
                  : "secondary.light",
              display: "block",
              textTransform: "none",
              fontSize: "large",
              fontWeight: "bold",
              ":hover": {
                color: "whitesmoke",
              },
            }}
          >
            {page.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
