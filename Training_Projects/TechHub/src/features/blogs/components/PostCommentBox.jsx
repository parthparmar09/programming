import { Avatar, Box, Paper, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "@features/users";
import { CustomButton } from "@features/ui";
import { useState } from "react";
import { useAddCommentToBlogMutation } from "../blogsApiSlice";

function PostCommentBox({ blogId }) {
  const user = useSelector(selectUser);
  const [addComment] = useAddCommentToBlogMutation();
  const [comment, setComment] = useState("");

  const handleCommentPost = async () => {
    try {
      await addComment({
        postId: blogId,
        comment: { username: user.name, comment, userId: user.id },
      });
      setComment("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <Box
        className="flex-centered"
        sx={{ gap: 1, justifyContent: "flex-start", mb: 1 }}
      >
        <Avatar
          alt={user.name}
          src={"https://source.unsplash.com/random?person"}
          sx={{ height: 36, width: 36 }}
        />
        <Typography fontSize="large">{user.name}</Typography>
      </Box>
      <TextField
        multiline
        autoFocus
        rows={4}
        placeholder="What are your thoughts?"
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleCommentPost()}
        size="small"
        variant="standard"
        sx={{ mb: 2 }}
      />
      <Box className="flex-centered" sx={{ justifyContent: "flex-start" }}>
        <CustomButton
          sx={{ p: 0, px: 1 }}
          variant="contained"
          disabled={!comment}
          onClick={handleCommentPost}
        >
          Respond
        </CustomButton>
        <CustomButton sx={{ p: 0, px: 1 }} onClick={() => setComment("")}>
          Cancel
        </CustomButton>
      </Box>
    </Paper>
  );
}

export default PostCommentBox;
