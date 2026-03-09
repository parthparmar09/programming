import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import toast from "react-hot-toast";

const baseUrl = import.meta.env.VITE_BASE;
export default function SignUp() {
  const { setToken, uploadFile } = useContext(AppContext);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const FirstName = useRef();
  const LastName = useRef();
  const Email = useRef();
  const Password = useRef();
  const RePassword = useRef();
  let image_url = null;

  const registerUser = (username, email, password) => {
    let toastId = toast.loading("registering...");

    fetch(baseUrl + "/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        image_url,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        toast.dismiss(toastId);

        if (!res.success) {
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

    let username = FirstName.current.value + " " + LastName.current.value;
    let email = Email.current.value;
    let password = Password.current.value;
    let rePassword = RePassword.current.value;

    if (password !== rePassword) {
      return toast.error("Passwords aren't matching");
    }

    registerUser(username, email, password);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setUploading(true);
    uploadFile(file)
      .then((url) => {
        console.log(url);
        image_url = url;
      })
      .catch((err) => (e.target.value = ""))
      .finally(() => setUploading(false));
    setUploading(false);
  };
  return (
    <div className="container w-50 mt-3">
      <h1 className="text-center">Sign Up</h1>

      <form className="container" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="form-label">
          User Profile
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-label="First Name"
            id="firstName"
            ref={FirstName}
            required={true}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-label="Last Name"
            id="lastName"
            ref={LastName}
            required={true}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="fileInput">
            Picture
          </label>
          <input
            type="file"
            className="form-control"
            id="fileInput"
            onInput={handleUpload}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            ref={Email}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            ref={Password}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            ref={RePassword}
            required={true}
          />
        </div>
        <button type="submit" disabled={uploading} className="btn btn-primary">
          Sign Up
        </button>
        <button type="reset" className=" ms-3 btn btn-outline-secondary">
          Reset
        </button>
      </form>

      <hr />
      <p className="ms-3 fs-5">
        Already Registered?{" "}
        <NavLink className="" to="/signin">
          Sign In
        </NavLink>
      </p>
    </div>
  );
}
