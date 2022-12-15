import { InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <TextField
      fullWidth={true}
      variant="outlined"
      type={"search"}
      placeholder="Pesquise por tipo de serviço"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        localStorage.setItem("query", e.target.value);
      }}
      InputProps={{
        endAdornment: (
          <Link to="/search" style={{ textDecoration: "none" }}>
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          </Link>
        ),
      }}
    />
  );
}
