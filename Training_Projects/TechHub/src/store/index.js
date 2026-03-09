import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "../features/auth";
import { blogsApiSlice } from "../features/blogs";
import { userSlice } from "../features/users";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [blogsApiSlice.reducerPath]: blogsApiSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      blogsApiSlice.middleware
    ),
});
