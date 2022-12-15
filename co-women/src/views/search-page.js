import Search from "@mui/icons-material/Search";
import {
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdsCard from "../components/cards/ads-card";
import { allServices } from "../services/all-services";

export default function SearchPage() {
  const [ads, setAds] = useState([]);
  const [query, setQuery] = useState(localStorage.getItem("query") || "");
  const [searchParam] = useState(["description", "title"]);

  useEffect(() => {
    async function fetchAds() {
      const data = await allServices.getAllAds();
      setAds(data);
    }
    fetchAds();
  }, []);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  }

  return (
    <>
      <Container sx={{ padding: "2vh" }}>
        <InputLabel>Pesquisa</InputLabel>
        <TextField
          fullWidth={true}
          variant="outlined"
          type={"search"}
          placeholder="Pesquise por tipo de serviço"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
      </Container>
      <Container
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          rowGap: "2vh",
        }}
      >
        {ads.length > 0 ? (
          search(ads).map((a) => (
            <AdsCard
              id={a._id}
              title={a.title}
              description={a.description}
              image={a.image}
              avaliacao={a.avaliacao}
            />
          ))
        ) : (
          <Typography variant="h5">
            Você precisa estar logada para ver os anúncios cadastrados
          </Typography>
        )}
      </Container>
    </>
  );
}
