import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { maskBr } from "js-brasil";

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

export default function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 2) {
      formErrors = true;
      toast.error("Nome deve ter pelo menos 2 caracteres");
    }

    if (lastName.length < 2) {
      formErrors = true;
      toast.error("Sobrenome deve ter pelo menos 2 caracteres");
    }

    if (cpfCnpj.length < 1) {
      formErrors = true;
      toast.error("Preencha o campo CPF/CNPJ");
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Preencha o campo Email com um email válido");
    }
    if (password.length < 6) {
      formErrors = true;
      toast.error("Senha deve ter pelo menos 6 caracteres");
    }

    if (formErrors) return;
  }

  return (
    <>
      <Container component="form" sx={style} noValidate onSubmit={handleSubmit}>
        <Typography gutterBottom variant="subtitle1" component="div" align="left">
          Deseja se cadastrar? Selecione seu perfil e preencha os campos abaixo
        </Typography>
        <FormControl>
          <RadioGroup row defaultValue="cliente" sx={{ alignItems: "center" }}>
            <FormControlLabel
              value="cliente"
              control={<Radio size="small" />}
              label="Cliente"
              componentsProps={{ typography: { fontSize: 14 } }}
            />
            <FormControlLabel
              value="prestadora"
              control={<Radio size="small" />}
              label="Prestadora de serviço"
              componentsProps={{ typography: { fontSize: 14 } }}
            />
          </RadioGroup>
        </FormControl>
        <TextField
          required
          label="Nome"
          type="text"
          sx={{ maxWidth: "400px", mb: 1 }}
          inputProps={{ maxLength: 50 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          label="Sobrenome"
          type="text"
          sx={{ maxWidth: "400px", mb: 1 }}
          inputProps={{ maxLength: 50 }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          required
          label="CPF/CNPJ"
          type="text"
          sx={{ maxWidth: "180px", mb: 1 }}
          inputProps={{ maxLength: 19 }}
          value={cpfCnpj}
          onChange={(e) => {
            const value = e.target.value
              .replace(/[^0-9]/g, "")
              .replace("_", "");
            const maskedCpfCnpj =
              value.length < 12 ? maskBr.cpf(value) : maskBr.cnpj(value);
            setCpfCnpj(maskedCpfCnpj);
          }}
        />
        <TextField
          required
          label="Email"
          type="email"
          sx={{ maxWidth: "400px", mb: 1 }}
          inputProps={{ maxLength: 50 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          label="Senha"
          type="password"
          sx={{ maxWidth: "400px", mb: 1 }}
          inputProps={{ maxLength: 50 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </Container>
      </Container>
    </>
  );
}
