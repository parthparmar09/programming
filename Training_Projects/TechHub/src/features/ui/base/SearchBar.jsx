import { useState } from "react";
import { TextInput } from "../";
import { IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@features/users";

function SearchBar() {
  const [search, setSearch] = useState("");
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/explore?search=" + search);
    setSearch("");
  };
  const handleChange = (e) => {
    if (e.key === "Enter") {
      return handleSearch();
    }
    setSearch(e.target.value);
  };
  return (
    <TextInput
      sx={{
        mb: 0,
        mr: 2,
        width: "30ch",
        display: isLoggedIn ? "block" : "none",
      }}
      placeholder="Search"
      value={search}
      onKeyDown={handleChange}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch} disabled={!search}>
              <i className="fa-solid fa-magnifying-glass "></i>
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
