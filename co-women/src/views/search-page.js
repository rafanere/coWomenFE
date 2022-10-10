import { InputLabel } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import StyledCard from "../components/card/styled-card";
import Header from "../components/header/header";
import SearchBar from "../components/search-bar/search-bar";

export default function SearchPage() {
  return (
    <div>
      <Header />
      <Container>
        <InputLabel>Pesquisa</InputLabel>
        <SearchBar />
      </Container>
      <Container>
        <div className="App-cards">
          <StyledCard />
          <StyledCard />
          <StyledCard />
        </div>
      </Container>
    </div>
  );
}
