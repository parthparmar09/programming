import { Avatar, Box, Chip, Paper, Typography } from "@mui/material";
import users from "@data/users.json";
import CustomButton from "./CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "@constants";
import { paths } from "@constants";

function SideSection({ sx }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "30%",
        p: 1,
        px: 2,
        ...sx,
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box>
        <Typography fontWeight="bold" sx={{ mb: 0.75 }}>
          Recommended Topics
        </Typography>
        {categories.map((cat, i) => (
          <Chip
            key={i}
            label={cat}
            sx={{ m: 0.5 }}
            onClick={() => navigate(paths.EXPLORE + "?search=" + cat)}
          />
        ))}
      </Box>

      <Paper
        elevation={5}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Typography fontWeight="bold">Writing on TechHub</Typography>
        <Typography>
          Start sharing your thoughts and insights on TechHub, grow your
          audience, grow Yourself.
        </Typography>
        <Link to={"/write"}>
          {" "}
          <CustomButton
            sx={{ py: 0.25, px: 1.5, fontSize: "small" }}
            variant="contained"
          >
            Start Writing
          </CustomButton>
        </Link>
      </Paper>

      <Box>
        <Typography fontWeight="bold">Who To Follow</Typography>
        {users.map((user, i) =>
          i < 4 ? (
            <Box
              key={i}
              className="flex-centered"
              sx={{ py: 1, justifyContent: "space-between" }}
            >
              <Avatar src="https://source.unsplash.com/random?person" />
              <Box sx={{ flexGrow: 1, ml: 1 }}>
                <Typography
                  component={Link}
                  to={paths.EXPLORE + "?search=" + user.name}
                  fontWeight="bold"
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  {user.name}
                </Typography>
                <Typography fontSize="small">
                  {Math.floor(Math.random() * 100 + 10) + ",000+ Follows"}
                </Typography>
              </Box>
              <CustomButton color="inherit" variant="outlined" sx={{ p: 0 }}>
                Follow
              </CustomButton>
            </Box>
          ) : null
        )}
      </Box>
    </Box>
  );
}

export default SideSection;
