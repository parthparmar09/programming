import { Avatar, Box, IconButton, Paper, Typography } from "@mui/material";
import { formatDate } from "@helpers";
import { useState } from "react";

function CommentCard({ comment }) {
  const [like, setLike] = useState(false);
  return (
    <Paper elevation={3} sx={{ p: 2, display: "flex", gap: 1, mb: 1 }}>
      <Avatar
        alt={comment.username}
        src={"https://source.unsplash.com/random?person"}
        sx={{ height: 36, width: 36, mt: 0.5 }}
      />
      <Box>
        <Box
          className="flex-centered"
          sx={{ gap: 0.5, justifyContent: "flex-start" }}
        >
          <Typography variant="subtitle1">{comment.username}</Typography>
          <Typography color="text.secondary" fontSize="small">
            &#x2022; {formatDate(comment.timestamp, true)}
          </Typography>
        </Box>
        <Typography fontSize="large">{comment.comment}</Typography>
      </Box>
      <IconButton
        onClick={() => setLike(!like)}
        sx={{
          ml: "auto",
          ":active": {
            transform: "scale(0.9)",
          },
        }}
      >
        <i
          className={`fa-${like ? "solid" : "regular"} fa-heart`}
          style={{ color: like ? "red" : "inherit" }}
        ></i>
      </IconButton>
    </Paper>
  );
}

export default CommentCard;
