import { InputLabel } from "@mui/material";
import { Container } from "@mui/system";
import { React, useEffect, useState } from "react";
import AdsCard from "../components/cards/ads-card";
import SearchBar from "../components/search-bar/search-bar";
import { allServices } from "../services/all-services";

export default function SearchPage() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    async function fetchAds() {
      const data  = await allServices.getAllAds();
      setAds(data);
    };
    fetchAds();
  }, []);

  return (
    <>
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
        {ads.map((a) => (
          <AdsCard
            id={a._id}
            title={a.title}
            description={a.description}
            image={a.image}
            avaliacao={a.avaliacao}
          />
        ))}
      </Container>
    </>
  );
}
