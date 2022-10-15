import { InputLabel } from "@mui/material";
import { Container } from "@mui/system";
import { React, useEffect, useState } from "react";
import StyledCard from "../components/card/styled-card";
import SearchBar from "../components/search-bar/search-bar";
import { AdsList } from "../components/services_components/AdsList";
import { adsService } from "../services/ads-service";

export default function SearchPage() {
  const [ads, setAds] = useState([]);

  const fetchAds = async () => {
    const { data } = await adsService.getService();
    setAds(data);
    console.log(data);
  }

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <>
      <div>
        <AdsList ads={ads} />
      </div>
      <Container sx={{ padding: "2vh" }}>
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
    </>
  );
}
