import { Box } from "@mui/material";
import { CustomButton } from "@features/ui";
function PublishButtons({ handlePublish, handleDraft }) {
  return (
    <Box>
      <CustomButton
        onClick={handlePublish}
        variant="contained"
        sx={{ px: 2, mr: 1 }}
      >
        Publish
      </CustomButton>
      <CustomButton sx={{ px: 1 }} onClick={handleDraft}>
        Save Draft
      </CustomButton>
    </Box>
  );
}

export default PublishButtons;
