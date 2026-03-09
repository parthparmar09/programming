import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApiSlice = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");

      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Blog", "Comment"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (params) => {
        return {
          url: "/blogs",
          params,
        };
      },

      providesTags: (result) =>
        result
          ? [...result.map((blog) => ({ type: "Blog", id: blog.id }))]
          : [],
    }),

    getBlogsByUserId: builder.query({
      query: (userId, params) => ({ url: `/users/${userId}/blogs`, params }),
      providesTags: (result) =>
        result
          ? [...result.map((blog) => ({ type: "Blog", id: blog.id }))]
          : [],
    }),

    getSingleBlog: builder.query({
      query: (postId) => `/blogs/${postId}`,
      providesTags: (result) =>
        result ? [{ type: "Blog", id: result.id }] : [],
    }),

    createBlog: builder.mutation({
      query: (postData) => ({
        url: "/blogs",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["Blog"],
    }),

    updateBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),

    deleteBlog: builder.mutation({
      query: (postId) => ({
        url: `/blogs/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),

    likeBlog: builder.mutation({
      query: (postId) => ({
        url: `/blogs/${postId}/like`,
        method: "PATCH",
      }),

      invalidatesTags: (result, error, postId) => [
        { type: "Blog", id: postId },
      ],
    }),
    unlikeBlog: builder.mutation({
      query: (postId) => ({
        url: `/blogs/${postId}/unlike`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, postId) => [
        { type: "Blog", id: postId },
      ],
    }),

    getBlogComments: builder.query({
      query: (postId) => ({
        url: `/blogs/${postId}/comment`,
      }),

      providesTags: (result, error, postId) =>
        result ? [{ type: "Blog", id: postId, tag: "Comments" }] : [],
    }),

    addCommentToBlog: builder.mutation({
      query: ({ postId, comment }) => ({
        url: `/blogs/${postId}/comment`,
        method: "PATCH",
        body: comment,
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Blog", id: postId, tag: "Comments" },
      ],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogsByUserIdQuery,
  useGetSingleBlogQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useLikeBlogMutation,
  useUnlikeBlogMutation,
  useGetBlogCommentsQuery,
  useAddCommentToBlogMutation,
} = blogsApiSlice;
