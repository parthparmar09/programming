import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export default function Home() {
  const {signOutUser} = useContext(AppContext);
  return (<><h1>Home Page</h1><Link to="/signin" className="btn btn-outline-primary" onClick={signOutUser}>Sign Out</Link></>);
}
