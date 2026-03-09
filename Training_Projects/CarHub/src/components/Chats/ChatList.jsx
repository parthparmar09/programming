import {
  Box,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useChatContext } from "../../context/ChatContext";
import { CallRounded } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ChatList() {
  const { chats, getChat } = useChatContext();
  const { darkMode } = useSelector((state) => state.user);
  const [chatFilter, setChatFilter] = useState("All");
  return (
    <Box
      sx={{
        width: "35%",
        height: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Typography fontWeight="bold" variant="h6">
          My Chats
        </Typography>
        <Select
          size="small"
          variant="standard"
          sx={{ width: "8ch", p: 0 }}
          value={chatFilter}
          onChange={(e) => setChatFilter(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Buying">Buying</MenuItem>
          <MenuItem value="Selling">Selling</MenuItem>
        </Select>
      </Box>
      <Box sx={{ height: "93%", overflowY: "scroll", p: 1 }}>
        {chats &&
          chats.map((curr, i) => (
            <Paper
              key={i}
              onClick={() => getChat(curr.id)}
              elevation={darkMode ? 3 : 0}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                mb: 1,
                borderRadius: 5,
                bgcolor: !darkMode && "grey.main",
                ":hover": {
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  transform: "scale(1.01)",
                },
                ":active": {
                  bgcolor: "secondary.light",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ borderRadius: 3, overflow: "hidden", height: 60 }}>
                  <img
                    src="https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="car"
                    height={60}
                  />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography fontWeight="bold" variant="body2">
                    {curr.owner?.name}{" "}
                  </Typography>
                  <Typography variant="body2">
                    {curr.car?.brand} {curr.car?.model}
                  </Typography>
                  <Typography fontSize="small">
                    {new Date(curr.messages[curr.messages?.length - 1]?.time)
                      .toLocaleTimeString()
                      .slice(0, 5)}{" "}
                    :{" "}
                    {curr.messages[curr.messages?.length - 1]?.content.length >
                    20
                      ? curr.messages[curr.messages?.length - 1]?.content.slice(
                          0,
                          20
                        ) + "..."
                      : curr.messages[curr.messages?.length - 1]?.content}
                  </Typography>
                </Box>
              </Box>

              <IconButton>
                <CallRounded />
              </IconButton>
            </Paper>
          ))}
      </Box>
    </Box>
  );
}
