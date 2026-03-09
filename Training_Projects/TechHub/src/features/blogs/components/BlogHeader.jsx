import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "@features/ui";
import { formatDate } from "@helpers";
import { paths } from "@constants";

function BlogHeader({ data }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        {data?.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Avatar
          src="https://source.unsplash.com/random?person"
          sx={{ height: 40, width: 40 }}
        />
        <Box>
          <Typography fontSize="large">
            {data?.author}
            <CustomButton sx={{ p: 0, fontSize: "small" }}>Follow</CustomButton>
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ pr: { xs: 3, md: 0 } }}
          >
            Published in{" "}
            <Link
              style={{ textDecoration: "none" }}
              to={paths.EXPLORE + "?search=" + data?.category}
            >
              <Typography
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                {data?.category}
              </Typography>
            </Link>{" "}
            &#x2022; {Math.floor(Math.random() * 5 + 5)} min read &#x2022;{" "}
            {formatDate(data?.timestamp)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogHeader;
