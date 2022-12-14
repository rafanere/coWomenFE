import { Button, Container, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

const style = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  paddingInline: "10vh",
  width: "450px",
  margin: 1,
  padding: 1,
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.clear();

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

    axios
      .post("https://cowomenbe.onrender.com/users/login", { email, password })
      .then(async (response) => {
        toast.success("Login efetuado com sucesso! Redirecionando para a página principal");
        const token = response.data.accessToken;
        localStorage.setItem("token", token);
        localStorage.setItem("userIsLogged", true);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.msg);
      });
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
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" type="submit" sx={{ mr: 1 }}>
            Logar
          </Button>

          <Link href="#">Esqueci minha senha</Link>
        </Container>
      </Container>
    </>
  );
}
