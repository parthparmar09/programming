import { Box, Container, Typography } from "@mui/material";
import {
  BasicInfo,
  PublishButtons,
  BlogEditor,
  useCreateBlogMutation,
} from "@features/blogs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@features/users";
import { useToast } from "@hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { validateUrl } from "@helpers/validators";
import { useUpdateBlogMutation } from "@features/blogs";
import { paths } from "@constants";

const InitialData = {
  title: "",
  content: "",
  category: "",
  coverUrl: "",
};
function Write() {
  const location = useLocation();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [createBlog] = useCreateBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const { showSuccess, showError } = useToast();
  const [data, setData] = useState(
    location.state ? location.state : InitialData
  );
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleDraft = () => {
    showSuccess("Draft saved");
  };

  const handlePublish = async () => {
    const errors = {};
    errors.title = !data.title.trim() ? "title can't be empty" : "";
    errors.category = !data.category ? "category can't be empty" : "";
    errors.coverUrl = validateUrl(data.coverUrl);
    errors.content = !data.content ? "content can't be empty" : "";
    setErrors(errors);

    if (Object.keys(errors).some((key) => errors[key] !== "")) {
      return;
    }
    try {
      let response = null;
      if (location.state) {
        response = await updateBlog({ id: data.id, data });
      } else {
        response = await createBlog({ ...data, author: user.name });
      }
      navigate(paths.BLOG + response.data.blog.id, {
        state: response.data.blog,
      });
      showSuccess("Blog Published");
    } catch (error) {
      console.log(error);
      showError(error.message);
    }
  };

  return (
    <Container maxWidth="md" sx={{ p: 3 }}>
      <Box
        className="flex-centered"
        sx={{ justifyContent: "space-between", mb: 5 }}
      >
        <Typography variant="h5">Share Your Thoughts</Typography>
        <PublishButtons
          handlePublish={handlePublish}
          handleDraft={handleDraft}
        />
      </Box>
      <BasicInfo data={data} handleChange={handleChange} errors={errors} />
      <BlogEditor
        content={data.content}
        handleChange={handleChange}
        error={errors.content}
      />
      <PublishButtons handlePublish={handlePublish} handleDraft={handleDraft} />
    </Container>
  );
}

export default Write;
