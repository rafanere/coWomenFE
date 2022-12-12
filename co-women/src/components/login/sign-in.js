import { Button, Container, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const style = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  paddingInline: "10vh",
  width: "450px",
  margin: 1,
  padding: 1
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (email.length < 1) {
      formErrors = true;
      toast.error("Preencha o campo Email");
    }
    if (password.length < 1) {
      formErrors = true;
      toast.error("Preencha o campo Senha");
    }

    if (formErrors) return;
  }

  return (
    <>
      <Container component="form" sx={style} noValidate onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h6" component="div" align="left">
          Já é cadastrada?
        </Typography>
        <TextField
          required
          label="Email"
          type="email"
          inputProps={{ maxLength: 50 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 1 }}
        />
        <TextField
          required
          label="Senha"
          type="password"
          inputProps={{ maxLength: 50 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 1 }}
        />
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Button variant="contained" type="submit" sx={{mr: 1}}>
            Logar
          </Button>
          <Link href="#">Esqueci minha senha</Link>
        </Container>
      </Container>
    </>
  );
}
