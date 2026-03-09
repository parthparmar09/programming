import { Box } from "@mui/material";

function BlogContent({ content, img }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        component="img"
        src={
          img
            ? img
            : "https://https://source.unsplash.com/random?technology,programming"
        }
        sx={{ height: { xs: 250, md: 400 }, width: 1, mb: 2 }}
      />

      <Box
        component="div"
        sx={{ textAlign: "justify", fontFamily: "ubuntu" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
}

export default BlogContent;
