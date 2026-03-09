import { Box, Typography } from "@mui/material";
import { useGetBlogsQuery } from "../blogsApiSlice";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { paths } from "@constants";

function BlogsGroupDisplay({ title, category, ...props }) {
  const { data } = useGetBlogsQuery({ search: category });

  return data && data.length ? (
    <Box {...props}>
      <Typography fontWeight="bold" variant="h6" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <Box sx={{ mb: 2 }}>
        {data.map((blog, i) =>
          i < 3 ? (
            <BlogCard blog={blog} small={true} key={i} disableTop={i === 0} />
          ) : null
        )}
      </Box>

      <Typography
        color="text.primary"
        component={Link}
        to={category ? paths.EXPLORE + "?search=" + category : paths.EXPLORE}
        align="center"
        sx={{ display: "block" }}
      >
        View All
      </Typography>
    </Box>
  ) : null;
}

export default BlogsGroupDisplay;
