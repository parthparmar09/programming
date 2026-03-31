import { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import toast from "react-hot-toast";

const baseUrl = import.meta.env.VITE_BASE;
export default function Login() {

  const { setToken} = useContext(AppContext);
  const navigate = useNavigate();
  const LoginForm = useRef();

  const loginUser = (email, password) => {
    let toastId = toast.loading("logging in...");
    fetch(baseUrl + "/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) =>res.json())
      .then((res) => {
        toast.dismiss(toastId);
        if(!res.success){
          return toast.error(res.message);
        }

        setToken(`Bearer ${res.data.token}`);
        toast.success(res.message);
        navigate("/");
      })
      .catch((err) => {
         console.log(err);
         toast.dismiss(toastId);
        toast.error(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(LoginForm.current);
    const formValues = {};

    formData.forEach((value, key) => (formValues[key] = value));

    const { email, password } = formValues;

    if (!email || !password) {
      return toast.error("'email' or 'password' can't be empty");
    }
    loginUser(email, password);
  };

  return (
    <div className="container w-50 mt-3">
      <h1 className="text-center">Sign In</h1>

      <form ref={LoginForm} className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            required={true}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        <NavLink className="ms-3" to="/resetPassword">
          Forgot Password?
        </NavLink>
      </form>

      <hr />
      <p className="ms-3 fs-5">
        New here?{" "}
        <NavLink className="" to="/signup">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
}
