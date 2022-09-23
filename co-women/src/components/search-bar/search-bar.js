import { InputAdornment, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <TextField
      className="searchBar"
      variant="outlined"
      type={"search"}
      placeholder="Pesquise por tipo de serviço"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}
