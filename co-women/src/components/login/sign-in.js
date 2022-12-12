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
        <TextField
          required
          label="Email"
          type="email"
          inputProps={{ maxLength: 50 }}
        />
        <TextField
          required
          label="Senha"
          type="password"
          inputProps={{ maxLength: 50 }}
        />
        <Button variant="contained">Logar</Button>
        <Link href="#">Esqueci minha senha</Link>
      </Container>
    </>
  );
}
