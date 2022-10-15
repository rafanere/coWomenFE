import { InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function SearchBar() {
  return (
    <TextField
      fullWidth={true}
      variant="outlined"
      type={"search"}
      placeholder="Pesquise por tipo de serviço"
      InputProps={{
        startAdornment: (
          <Link to="/search" style={{ textDecoration: 'none' }}>
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          </Link>
        ),
      }}
    />
  );
}
