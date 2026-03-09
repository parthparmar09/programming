import {
  Box,
  CircularProgress,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { useGetBlogCommentsQuery } from "../";
import CommentCard from "./CommentCard";
import PostCommentBox from "./PostCommentBox";

function BlogCommentsDrawer({ openComments, handleClose, blogId }) {
  const { data, isError, isLoading, error } = useGetBlogCommentsQuery(blogId, {
    skip: !openComments,
  });

  return (
    <Drawer anchor="right" open={openComments} onClose={handleClose}>
      <Box
        sx={{
          width: { xs: "100vw", md: "40vw", lg: "25vw" },
          height: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
          }}
        >
          <IconButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </IconButton>
          <Typography variant="h5">Responses</Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <PostCommentBox blogId={blogId} />{" "}
          {isLoading ? (
            <CircularProgress color="secondary" />
          ) : isError ? (
            <Typography>{error.message}</Typography>
          ) : data?.length === 0 ? (
            <Typography>No Responses Yet</Typography>
          ) : (
            <>
              <Box>
                {data?.map((comment, i) => (
                  <CommentCard key={i} comment={comment} />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}

export default BlogCommentsDrawer;
