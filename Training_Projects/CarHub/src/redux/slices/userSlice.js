import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  try {
    const response = await axios.post("/api/login", user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export const signUpUser = createAsyncThunk("user/signUpUser", async (user) => {
  try {
    const response = await axios.post("/api/signup", user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

const localUser = localStorage.getItem("user");

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localUser ? JSON.parse(localUser) : null,
    loading: false,
    darkMode: false,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.darkMode = false;
      state.loading = false;
      toast.success("Logged out");
      localStorage.removeItem("user");
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        toast.success("Logged in");
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.error.message);
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.error.message);
      });
  },
});

export default userSlice.reducer;
export const { logoutUser, setDarkMode } = userSlice.actions;
