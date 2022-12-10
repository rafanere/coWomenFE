import { InputLabel } from "@mui/material";
import { Container } from "@mui/system";
import { React, useEffect, useState } from "react";
import AdsCard from "../components/cards/ads-card";
import SearchBar from "../components/search-bar/search-bar";
import { adsService } from "../services/ads-service";

export default function SearchPage() {
  const [ads, setAds] = useState([]);

  const fetchAds = async () => {
    const { data } = await adsService.getService();
    setAds(data);
  };

  useEffect(() => {
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
