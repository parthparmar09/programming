import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Chats from "./pages/Chats";
import Auth from "./pages/Auth";
import Main from "./components/Base/Main";
import Car from "./pages/Car";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "./components/Base/Loader";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import getTheme from "./theme";

function App() {
  const { user, loading, darkMode } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, []);

  return (
    <ThemeProvider theme={getTheme(darkMode)}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontFamily: "Space Grotesk",
          },
        }}
      />
      <Loader loading={loading} />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path="/sell" element={<Sell />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
          <Route path="/car/:id" element={<Car />}></Route>
        </Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
