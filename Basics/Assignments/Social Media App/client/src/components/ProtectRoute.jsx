import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import toast from "react-hot-toast";

export default function ProtectRoute() {
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log("here");
      navigate("/signin");
    }
  }, [token]);

  return <Outlet />;
}
