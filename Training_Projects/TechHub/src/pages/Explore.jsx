import { Link, useSearchParams } from "react-router-dom";
import { useGetBlogsQuery } from "@features/blogs";
import { CustomButton, SplitLayout } from "@features/ui";
import { Box, Typography } from "@mui/material";
import { BlogCard } from "@features/blogs";
import { useCustomLoader } from "@hooks";
import { useEffect } from "react";
import { paths } from "@constants";

function Explore() {
  const [searchParams] = useSearchParams(window.location.href);
  const params = Object.fromEntries(searchParams);
  const { data, isFetching } = useGetBlogsQuery(params);
  const { showLoader, hideLoader, Loader } = useCustomLoader();

  useEffect(() => {
    if (isFetching) {
      return showLoader();
    }
    hideLoader();
  }, [isFetching]);

  return (
    <SplitLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="h4" color="text.secondary" fontWeight="bold">
          {params.search ? "Results for " : "Top Articles"}
          <Typography
            variant="h4"
            color="text.primary"
            component="span"
            fontWeight="bold"
          >
            {params.search ? params.search : null}
          </Typography>
        </Typography>
        <CustomButton
          component={Link}
          to={paths.EXPLORE}
          variant="outlined"
          color="inherit"
          sx={{
            p: 0,
            px: 2,
            display: params.search ? "block" : "none",
          }}
        >
          Reset <i className="fa-solid fa-xmark fa-xl"></i>
        </CustomButton>
      </Box>
      <Box>
        {data && data.length > 0
          ? data.map((blog, i) => (
              <BlogCard blog={blog} key={i} small={true} disableTop={i === 0} />
            ))
          : !isFetching && <Typography>No results found.</Typography>}
      </Box>
      <Loader />
    </SplitLayout>
  );
}

export default Explore;
