import { Typography } from "@mui/material";
import { CustomButton } from "@features/ui";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@features/users";
import { paths } from "@constants";

const Pages = [
  {
    name: "Explore",
    icon: <i className="fa-regular fa-compass fa-xl"></i>,
    path: paths.EXPLORE,
  },
  {
    name: "Write",
    icon: <i className="fa-regular fa-pen-to-square fa-xl"></i>,
    path: paths.WRITE,
  },
  {
    name: "My Blogs",
    icon: <i className="fa-regular fa-file-lines fa-xl"></i>,
    path: paths.MYBLOGS,
  },
];

function PageLinks() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {Pages.map((page, i) => (
        <CustomButton
          sx={{
            px: 1,
            mr: { xs: 1, lg: 2 },
            color: location.pathname === page.path ? "primary" : "inherit",
            display: isLoggedIn ? "block" : "none",
          }}
          key={i}
          onClick={() => navigate(page.path)}
        >
          <Typography>
            {page.icon} {page.name}
          </Typography>
        </CustomButton>
      ))}
    </>
  );
}

export default PageLinks;
