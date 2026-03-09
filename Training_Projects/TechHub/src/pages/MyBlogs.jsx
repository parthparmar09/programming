import { Box, Container, Typography } from "@mui/material";
import { BlogsTable, useGetBlogsQuery } from "@features/blogs";
import { useSelector } from "react-redux";
import { selectUser } from "@features/users";
import { CustomButton } from "@features/ui";
import { useNavigate } from "react-router-dom";
import { paths } from "@constants";

function MyBlogs() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const { data, isLoading } = useGetBlogsQuery({ search: user.name });

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Box
        className="flex-centered"
        sx={{ justifyContent: "space-between", mb: 3 }}
      >
        <Typography variant="h5" fontWeight="600">
          My Blogs
        </Typography>
        <CustomButton
          onClick={() => navigate(paths.WRITE)}
          sx={{ px: 2, py: 0.5, display: "flex" }}
          variant="contained"
        >
          <Typography sx={{ mr: 1 }}>Write</Typography>
          <i className="fa-regular fa-pen-to-square"></i>
        </CustomButton>
      </Box>
      {!isLoading && data && data.length > 0 ? (
        <BlogsTable blogs={data} />
      ) : (
        <Typography>You have not published any articles. </Typography>
      )}
    </Container>
  );
}

export default MyBlogs;
