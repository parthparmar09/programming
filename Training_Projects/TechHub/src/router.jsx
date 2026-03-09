import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "@features/ui/";
import { Auth, Home, Explore, Blog, Write, MyBlogs } from "./pages";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@features/users";
import { paths } from "@constants";

function AppRouter() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Router>
      <Routes>
        <Route exact path={paths.AUTH} element={<Auth />} />
        <Route
          exact
          path={paths.HOME}
          element={
            isLoggedIn ? <Layout /> : <Navigate replace to={paths.AUTH} />
          }
        >
          <Route exact path={paths.HOME} element={<Home />} />
          <Route exact path={paths.EXPLORE} element={<Explore />} />
          <Route exact path={paths.BLOG + ":id"} element={<Blog />} />
          <Route exact path={paths.WRITE} element={<Write />} />
          <Route exact path={paths.MYBLOGS} element={<MyBlogs />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
