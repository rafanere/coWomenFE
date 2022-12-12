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
        />
        <TextField
          required
          label="Senha"
          type="password"
          inputProps={{ maxLength: 50 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Logar
        </Button>
        <Link href="#">Esqueci minha senha</Link>
      </Container>
    </>
  );
}
