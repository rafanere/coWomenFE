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
      <Container
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          rowGap: "2vh",
        }}
      >
        <StyledCard />
        <StyledCard />
        <StyledCard />
        <StyledCard />
        <StyledCard />
        <StyledCard />
        <StyledCard />
        <StyledCard />
        <StyledCard />
      </Container>
    </div>
  );
}
