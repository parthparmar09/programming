import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box } from "@mui/material";

export default function Message({ msg, curr }) {
  return (
    <Box
      sx={{
        maxWidth: "50%",
        alignSelf: !msg.sender && "flex-end",
        display: "flex",
        justifyContent: !msg.sender && "flex-end",
      }}
    >
      {msg.sender && (
        <Avatar
          sx={{
            bgcolor: "divider",
            height: 24,
            width: 24,
            p: 0.5,
            fontSize: "small",
            color: "inherit",

            mr: 1,
          }}
        >
          {curr.owner.name
            .split(" ")
            .map((s) => s.slice(0, 1))
            .join("")}
        </Avatar>
      )}
      <Box>
        <Typography
          sx={{
            borderRadius: 2,
            p: 1,
            mb: 0.5,
            bgcolor: msg.sender ? "divider" : "transparent",
            border: !msg.sender && "1px solid",
            borderColor: "divider",
          }}
        >
          {msg.content}
        </Typography>
        <Typography
          align={msg.sender ? "right" : "left"}
          fontSize="small"
          sx={{ color: "secondary.light" }}
        >
          {new Date(msg.time).toLocaleTimeString().slice(0, 5)}
        </Typography>
      </Box>
    </Box>
  );
}
