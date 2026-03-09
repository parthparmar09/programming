import { rest } from "msw";
import blogData from "@data/blogs.json";
let blogs = [...blogData];

export default [
  rest.get("/api/blogs", (req, res, ctx) => {
    let filteredBlogs = [...blogs];

    const params = new URLSearchParams(req.url.search);
    const searchParams = Object.fromEntries(params.entries());

    console.log();

    if (searchParams.search) {
      filteredBlogs = filteredBlogs.filter(
        (blog) =>
          blog.category
            .toLowerCase()
            .includes(searchParams.search.toLowerCase()) ||
          blog.title
            .toLowerCase()
            .includes(searchParams.search.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchParams.search.toLowerCase())
      );
    }

    return res(ctx.status(200), ctx.json(filteredBlogs));
  }),

  rest.get("/api/blogs/:postId", (req, res, ctx) => {
    const { postId } = req.params;
    const blog = blogs.find((blog) => blog.id === postId);
    if (blog) {
      return res(ctx.status(200), ctx.json(blog));
    } else {
      return res(ctx.status(404), ctx.json({ message: "Blog not found" }));
    }
  }),

  rest.post("/api/blogs", (req, res, ctx) => {
    const newBlog = {
      ...req.body,
      id: blogs.length + 1,
      timestamp: new Date().toISOString(),
      comments: [],
      likes: 0,
    };
    blogs.push(newBlog);
    return res(
      ctx.status(200),
      ctx.json({ message: "Blog created", blog: newBlog })
    );
  }),

  rest.patch("/api/blogs/:postId", (req, res, ctx) => {
    const { postId } = req.params;
    const updatedBlog = req.body;
    const index = blogs.findIndex((blog) => blog.id === postId);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...updatedBlog };
      return res(
        ctx.status(200),
        ctx.json({ message: "Blog updated", blog: blogs[index] })
      );
    } else {
      return res(ctx.status(404), ctx.json({ message: "Blog not found" }));
    }
  }),

  rest.delete("/api/blogs/:postId", (req, res, ctx) => {
    const { postId } = req.params;
    const index = blogs.findIndex((blog) => blog.id === postId);
    if (index !== -1) {
      blogs.splice(index, 1);
      return res(ctx.status(200), ctx.json({ message: "Blog deleted" }));
    } else {
      return res(ctx.status(404), ctx.json({ message: "Blog not found" }));
    }
  }),
  rest.patch("/api/blogs/:postId/like", (req, res, ctx) => {
    const { postId } = req.params;
    const index = blogs.findIndex((blog) => blog.id === postId);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], likes: blogs[index].likes + 1 };
      return res(ctx.status(200), ctx.json(blogs[index]));
    } else {
      return res(ctx.status(404), ctx.json({ message: "Blog not found" }));
    }
  }),
  rest.patch("/api/blogs/:postId/unlike", (req, res, ctx) => {
    const { postId } = req.params;
    const index = blogs.findIndex((blog) => blog.id === postId);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], likes: blogs[index].likes - 1 };
      return res(ctx.status(200), ctx.json(blogs[index]));
    } else {
      return res(ctx.status(404), ctx.json({ message: "Blog not found" }));
    }
  }),
  rest.get("/api/blogs/:postId/comment", (req, res, ctx) => {
    const { postId } = req.params;
    const index = blogs.findIndex((blog) => blog.id === postId);

    if (index !== -1) {
      const comments = blogs[index].comments.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
      return res(ctx.status(200), ctx.json(comments));
    } else {
      return res(ctx.status(404), ctx.json({ message: "Blog not found" }));
    }
  }),
  rest.patch("/api/blogs/:postId/comment", (req, res, ctx) => {
    const { postId } = req.params;
    const index = blogs.findIndex((blog) => blog.id === postId);
    if (index !== -1) {
      blogs[index].comments.push({ timestamp: Date.now(), ...req.body });
      return res(ctx.status(200), ctx.json(blogs[index].comments));
    } else {
      return res(ctx.status(404), ctx.json({ message: "Blog not found" }));
    }
  }),
];
