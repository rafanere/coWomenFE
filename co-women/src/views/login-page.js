import * as React from "react";
import {
  Grid,
} from "@mui/material";
import SignUp from "../components/login/sign-up";
import SignIn from "../components/login/sign-in";

export default function LoginPage() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SignIn />
        </Grid>
        <Grid item xs={6}>
          <SignUp />
        </Grid>
      </Grid>
    </>
  );
}
