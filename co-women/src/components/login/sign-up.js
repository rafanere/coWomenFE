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
          <RadioGroup row aria-labelledby="radio-group" defaultValue="cliente" la>
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
          inputProps={{ maxLength: 50 }}
        />
        <TextField
          required
          label="CPF/CNPJ"
          type="text"
          style={{ maxWidth: "180px" }}
          inputProps={{ maxLength: 14 }}
        />
        <TextField
          required
          label="Email"
          type="email"
          style={{ maxWidth: "350px" }}
          inputProps={{ maxLength: 50 }}
        />
        <TextField
          required
          label="Senha"
          type="password"
          inputProps={{ maxLength: 50 }}
        />
        <TextField
          required
          label="Repita a senha"
          type="password"
          inputProps={{ maxLength: 50 }}
        />
        <Button variant="contained">Cadastrar</Button>
      </Container>
    </>
  );
}
