import { Box, Grid, TextField } from "@mui/material";

const txt = {
  nome: "Sandra Nina",
  sobrenome: "Raimunda Barros",
  cpf: "44.245.896/0001-44",
  email: "sandra_nina_barros@netsite.com.br",
  descricao:
    "sihdhuashud sdasidhuashud a dasji das diashud huashudashud huashu dashudhuashu dhuashu ashud huas dhusahu dhuashu dahsu dhuashu huashud ashudhuashud huashudashudhuashudhuasdhu",
  imagem:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nasa_blue_marble.jpg/220px-Nasa_blue_marble.jpg",
};

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
};

export default function PersonalData() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8} style={style}>
            <TextField
              disabled
              label="Nome"
              type="text"
              value={txt.nome}
              variant="standard"
              sx={{ maxWidth: "400px", mb: 1 }}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              disabled
              label="Sobrenome"
              type="text"
              value={txt.sobrenome}
              variant="standard"
              sx={{ maxWidth: "400px", mb: 1 }}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              disabled
              label="CPF/CNPJ"
              type="text"
              value={txt.cpf}
              variant="standard"
              sx={{ maxWidth: "180px", mb: 1 }}
              inputProps={{ maxLength: 20 }}
            />
            <TextField
              disabled
              label="Email"
              type="email"
              value={txt.email}
              variant="standard"
              sx={{ maxWidth: "350px", mb: 1 }}
              inputProps={{ maxLength: 50 }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
