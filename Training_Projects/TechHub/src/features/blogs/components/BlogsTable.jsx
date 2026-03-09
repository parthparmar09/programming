import {
  Box,
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { formatDate } from "@helpers";
import { useToast } from "@hooks";
import { useNavigate } from "react-router-dom";
import { useDeleteBlogMutation } from "../blogsApiSlice";
import { paths } from "@constants";

const Columns = ["Cover", "Title", "Category", "Date Published", "Actions"];

function ActionButton({ title, icon, ...props }) {
  return (
    <Tooltip title={title}>
      <Button color="inherit" {...props}>
        {icon}
      </Button>
    </Tooltip>
  );
}
function BlogsTable({ blogs }) {
  const navigate = useNavigate();
  const [deleteBlog] = useDeleteBlogMutation();
  const { showSuccess, showError } = useToast();

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      showSuccess("Blog deleted");
    } catch (error) {
      showError(error.message);
    }
  };
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          {Columns.map((col, i) => (
            <TableCell key={i} align="right">
              {col}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {blogs.map((blog, i) => (
          <TableRow key={i}>
            <TableCell>
              <Box
                component="img"
                sx={{ height: 100, width: 180 }}
                src={blog.coverUrl}
              />
            </TableCell>
            <TableCell align="right">{blog.title}</TableCell>
            <TableCell align="right">{blog.category}</TableCell>
            <TableCell align="right">{formatDate(blog.timestamp)}</TableCell>
            <TableCell align="right">
              <ButtonGroup>
                <ActionButton
                  title="view"
                  icon={<i className="fa-regular fa-eye "></i>}
                  onClick={() => navigate(paths.BLOG + blog.id)}
                />
                <ActionButton
                  title="edit"
                  icon={<i className="fa-regular fa-pen-to-square "></i>}
                  onClick={() => navigate(paths.WRITE, { state: blog })}
                />
                <ActionButton
                  title="delete"
                  icon={<i className="fa-regular fa-trash-can "></i>}
                  onClick={() => handleDelete(blog.id)}
                />
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default BlogsTable;
