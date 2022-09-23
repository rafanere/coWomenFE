import { InputLabel } from "@mui/material";
import SearchBar from "../search-bar/search-bar";

export default function HomePage() {
  return (
    <div className="App-content">
      <InputLabel>
        Encontre a prestadora de serviços ideal para o que você precisa
      </InputLabel>
      <SearchBar/>
      <p>OU</p>
      <p>
        Se for uma prestadora de serviços, clique{" "}
        <a className="App-link" href="_">
          aqui
        </a>
      </p>
    </div>
  );
}
