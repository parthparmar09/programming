import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const useCustomLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  const Loader = () => (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="secondary" />
    </Backdrop>
  );

  return { showLoader, hideLoader, Loader };
};

export default useCustomLoader;
