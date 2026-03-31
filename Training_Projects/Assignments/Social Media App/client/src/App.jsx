import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import ProtectRoute from "./components/ProtectRoute";
import { AppContext } from "./Context/AppContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import toast, { Toaster } from "react-hot-toast";

const baseUrl = import.meta.env.VITE_BASE;

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
      const toastId = toast.loading("uploading...");
      const formData = new FormData();
      formData.append("image", file);

      fetch(baseUrl + "/api/v1/uploads", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          toast.dismiss(toastId);
          if (!res.success) {
            toast.error(res.message);
            return reject(null);
          }
          toast.success(res.message);
          resolve(res.url);
        })
        .catch((err) => {
          toast.dismiss(toastId);
          toast.error(err.message);
          reject(null);
        });
    });
  };

  const signOutUser = () => {
    localStorage.removeItem("token");
    toast.success("logged out!");
  };

  return (
    <AppContext.Provider value={{ token, setToken, uploadFile, signOutUser }}>
      {/* <Toast/> */}
      <Toaster />
      <Routes>
        <Route path="/signin" Component={SignIn}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route Component={ProtectRoute}>
          <Route path="/" Component={Home}></Route>
          <Route path="/users" element={<h1>users</h1>}></Route>
          <Route path="/posts" element={<h1>posts</h1>}></Route>
        </Route>
        <Route path="/*" Component={NotFound}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
