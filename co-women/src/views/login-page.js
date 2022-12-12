import * as React from "react";
import { Container } from "@mui/material";
import SignUp from "../components/login/sign-up";
import SignIn from "../components/login/sign-in";

export default function LoginPage() {
  return (
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
