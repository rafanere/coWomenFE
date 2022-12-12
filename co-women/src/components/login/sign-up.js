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
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 3) {
      formErrors = true;
      toast.error("Nome deve ter pelo menos 3 caracteres");
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
        <Typography gutterBottom variant="h6" component="div" align="left">
          Deseja se cadastrar?
        </Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="radio-group"
            defaultValue="cliente"
            la
          >
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          label="CPF/CNPJ"
          type="text"
          style={{ maxWidth: "180px" }}
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
          style={{ maxWidth: "350px" }}
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
          Cadastrar
        </Button>
      </Container>
    </>
  );
}
