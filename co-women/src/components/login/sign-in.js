import { Button, Container, Link, TextField, Typography } from "@mui/material";

const style = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  paddingInline: "10vh",
};

export default function SignIn() {
  return (
    <>
      <Container component="form" sx={style} noValidate autoComplete="off">
        <Typography gutterBottom variant="h6" component="div" align="left">
          Já é cadastrada?
        </Typography>
        <TextField required label="Email" type="email" />
        <TextField
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained">Logar</Button>
        <Link href="#">Esqueci minha senha</Link>
      </Container>
    </>
  );
}
