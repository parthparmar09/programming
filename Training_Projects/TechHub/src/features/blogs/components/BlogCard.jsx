import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BlogActions } from "..";
import { formatDate } from "@helpers";
import { paths } from "@constants";

function BlogCard({ blog, sx, disableTop, small }) {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        pb: 2,
        pt: disableTop ? 0 : 3,
        ...sx,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, gap: 1 }}>
        <Avatar
          src="https://source.unsplash.com/random?profile"
          sx={{ height: 30, width: 30 }}
        />
        <Typography>{blog.author}</Typography>
        <Typography color="text.secondary">in</Typography>
        <Typography
          component={Link}
          to={paths.EXPLORE + "?search=" + blog.category}
          color="text.primary"
        >
          {blog.category}
        </Typography>
      </Box>
      <Box
        component={Link}
        to={paths.BLOG + blog.id}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          color: "text.primary",
          textDecoration: "none",
          cursor: "pointer",
          gap: { xs: 1, md: 5 },
          mb: 2,
          height: { md: 150 },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
            height: 1,
          }}
        >
          <Typography variant="h6">{blog.title}</Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, magni. Something really exiting. Read more...
          </Typography>
          <Typography
            sx={{ my: "auto" }}
            color="text.secondary"
            variant="body2"
          >
            {Math.floor(Math.random() * 5 + 5)} min read &#x2022;{" "}
            {formatDate(blog?.timestamp)}
          </Typography>
        </Box>
        <Box
          component="img"
          src={blog.coverUrl}
          sx={{ height: { xs: 250, md: 1 }, minWidth: { xs: 1, md: 250 } }}
        />
      </Box>
      <BlogActions
        data={blog}
        noBorder={true}
        small={small}
        sx={{ m: 0, p: 0 }}
      />
    </Box>
  );
}

export default BlogCard;
