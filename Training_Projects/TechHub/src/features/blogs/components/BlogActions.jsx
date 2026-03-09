import { Box, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import BlogCommentsDrawer from "./BlogCommentsDrawer";
import { useLikeBlogMutation, useUnlikeBlogMutation } from "../blogsApiSlice";

function IconButton({ title, altTitle, isAlt, children, sx, ...props }) {
  return (
    <Tooltip title={isAlt ? altTitle : title}>
      <Box
        className="flex-centered"
        {...props}
        sx={{
          gap: 1,
          transition: "all 0.1s ease",
          ":hover": {
            color: "text.primary",
            cursor: "pointer",
          },
          ":active": {
            transform: "scale(0.9)",
          },
          ...sx,
        }}
      >
        {children}
      </Box>
    </Tooltip>
  );
}
function BlogActions({ data, noBorder, small, sx }) {
  const [likeBlog] = useLikeBlogMutation();
  const [unlikeBlog] = useUnlikeBlogMutation();
  const [like, setLike] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [save, setSave] = useState(false);

  const handleOpenComment = () => {
    setOpenComments(true);
  };
  const handleCloseComment = () => {
    setOpenComments(false);
  };

  const handleLikeBlog = async () => {
    try {
      if (!like) {
        await likeBlog(data.id);
      } else {
        await unlikeBlog(data.id);
      }
    } catch (error) {
      console.error(error);
    }
    setLike(!like);
  };

  return (
    <>
      <Box
        className="flex-centered"
        sx={{
          borderTop: !noBorder && 1,
          borderBottom: !noBorder && 1,
          borderColor: "divider",
          p: 1.5,
          justifyContent: "space-between",
          color: "text.secondary",
          mb: 3,
          ...sx,
        }}
      >
        <Box className="flex-centered" sx={{ gap: 3 }}>
          <IconButton
            title={"like"}
            altTitle={"unlike"}
            isAlt={like}
            onClick={handleLikeBlog}
          >
            <i
              className={`fa-${like ? "solid" : "regular"} fa-heart fa-xl`}
              style={{ color: like ? "red" : "inherit" }}
            ></i>
            <Typography>{data.likes}</Typography>
          </IconButton>
          <IconButton title={"comment"} onClick={handleOpenComment}>
            <i className="fa-regular fa-comment fa-xl"></i>
            <Typography>{data.comments.length}</Typography>
          </IconButton>
        </Box>
        <Box className="flex-centered" sx={{ gap: 3 }}>
          <IconButton
            title={"save"}
            altTitle={"unsave"}
            isAlt={save}
            onClick={() => setSave(!save)}
          >
            <i
              className={`fa-${save ? "solid" : "regular"} fa-bookmark fa-xl`}
            ></i>
          </IconButton>
          <IconButton title={"share"} sx={{ display: small && "none" }}>
            <i className="fa-regular fa-share-from-square fa-xl"></i>
          </IconButton>
          <IconButton title={"report"} sx={{ display: small && "none" }}>
            <i className="fa-regular fa-flag fa-xl"></i>
          </IconButton>
        </Box>
      </Box>
      <BlogCommentsDrawer
        openComments={openComments}
        handleClose={handleCloseComment}
        blogId={data.id}
      />
    </>
  );
}

export default BlogActions;
