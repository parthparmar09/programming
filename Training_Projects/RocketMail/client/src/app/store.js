import { configureStore } from "@reduxjs/toolkit";
import { emailApi } from "@features/emails";
import { userApi } from "@features/users";
import { authApi } from "@features/auth";
import categoryReducer from "./slices/categorySlice";
import selectedEmailReducer from "./slices/selectedEmailSlice";
import emailComposeReducer from "./slices/emailComposeSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [emailApi.reducerPath]: emailApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
    emailCompose: emailComposeReducer,
    category: categoryReducer,
    selectedEmail: selectedEmailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(emailApi.middleware)
      .concat(userApi.middleware),
});

export default store;
