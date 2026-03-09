import { useLocation } from "react-router-dom";
import {
  BlogActions,
  BlogContent,
  BlogHeader,
  BlogsGroupDisplay,
  useGetSingleBlogQuery,
} from "@features/blogs";
import { useCustomLoader } from "@hooks";
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";

function Blog() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  const { isLoading, isError, data, error, refetch } =
    useGetSingleBlogQuery(lastPart);
  const { showLoader, hideLoader, Loader } = useCustomLoader();

  const blogData = location.state ? location.state : data;

  useEffect(() => {
    refetch();
  }, [location.pathname]);

  useEffect(() => {
    if (isLoading) {
      showLoader();
    } else {
      hideLoader();
    }
  }, [isLoading]);

  return (
    <>
      <Loader />
      <Container maxWidth="md" sx={{ p: { xs: 2, md: 5 } }}>
        {isError && !location.state ? (
          <Typography>{error.data.message}</Typography>
        ) : null}
        {blogData ? (
          <>
            <BlogHeader data={blogData} />
            <BlogActions data={blogData} />
            <BlogContent content={blogData?.content} img={blogData?.coverUrl} />
            <BlogActions data={blogData} />
            <BlogsGroupDisplay
              sx={{ mt: 2 }}
              title={"More in " + blogData?.category}
              category={blogData?.category}
            />
          </>
        ) : null}
      </Container>
    </>
  );
}

export default Blog;
