import { Box } from "@mui/material";
import ChatList from "./ChatList";
import CurrentChat from "./CurrentChat";

export default function ChatDisplay() {
  return (
    <Box sx={{ display: "flex", my: 5, borderRadius: 5, height: "80vh" }}>
      <ChatList />
      <CurrentChat />
    </Box>
  );
}
