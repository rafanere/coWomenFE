import * as React from "react";
import { Container, Typography } from "@mui/material";
import SignUp from "../components/login/sign-up";
import SignIn from "../components/login/sign-in";

export default function LoginPage() {
  return localStorage.getItem("userIsLogged") ? (
    <Typography variant="h5" sx={{ m: 2 }}>
      Você já está logada!
    </Typography>
  ) : (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexFlow: "row wrap",
          rowGap: "2vh",
        }}
      >
        <SignIn />
        <SignUp />
      </Container>
    </>
  );
}
