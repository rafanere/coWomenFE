import { Typography } from "@mui/material";
import Home from "../components/home/home";
import { CenteredContainer } from "../styles/centered-container";

export default function HomePage() {
  return localStorage.getItem("userIsLogged") ? (
    <Home />
  ) : (
    <CenteredContainer>
      <Typography variant="h5" sx={{ m: 2 }}>
        Faça login para começar
      </Typography>
    </CenteredContainer>
  );
}
