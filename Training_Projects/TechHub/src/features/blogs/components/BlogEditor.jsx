import { Paper } from "@mui/material";
import { useState } from "react";
import RichTextEditor from "react-rte";

function BlogEditor({ content, handleChange, error }) {
  const [value, setValue] = useState(
    content
      ? RichTextEditor.createValueFromString(content, "html")
      : RichTextEditor.createEmptyValue()
  );

  const handleOnChange = (newValue) => {
    setValue(newValue);
    handleChange("content", newValue.toString("html"));
  };
  return (
    <Paper
      component={RichTextEditor}
      elevation={0}
      sx={{
        minHeight: 400,
        mb: 2,
        p: 1,
        bgcolor: "background",
        fontFamily: "Ubuntu",
      }}
      value={value}
      onChange={handleOnChange}
      placeholder={error ? error : "Start writing..."}
    />
  );
}

export default BlogEditor;
