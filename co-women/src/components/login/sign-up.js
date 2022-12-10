import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const style = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  paddingInline: "10vh",
};

export default function SignUp() {
  return (
    <>
      <Container component="form" sx={style} noValidate autoComplete="off">
        <Typography gutterBottom variant="h6" component="div" align="left">
          Deseja se cadastrar?
        </Typography>
        <FormControl>
          <RadioGroup row aria-labelledby="radio-group" defaultValue="cliente">
            <FormLabel id="radio-group">Perfil: </FormLabel>
            <FormControlLabel
              value="cliente"
              control={<Radio />}
              label="Cliente"
            />
            <FormControlLabel
              value="prestadora"
              control={<Radio />}
              label="Prestadora de serviço"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          required
          label="Nome"
          type="text"
          style={{ maxWidth: "400px" }}
        />
        <TextField
          required
          label="CPF/CNPJ"
          type="text"
          style={{ maxWidth: "180px" }}
        />
        <TextField
          required
          label="Email"
          type="email"
          style={{ maxWidth: "350px" }}
        />
        <TextField required label="Senha" type="password" autoComplete="" />
        <TextField
          required
          label="Repita a senha"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained">Cadastrar</Button>
      </Container>
    </>
  );
}
