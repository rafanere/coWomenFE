import { Box, Button, CardMedia, Grid, TextField } from "@mui/material";
import { CenteredContainer } from "../../styles/centered-container";

const txt = {
  nome: "Sandra Nina Raimunda Barros",
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
              style={{ maxWidth: "400px" }}
            />
            <TextField
              disabled
              label="CPF/CNPJ"
              type="text"
              value={txt.cpf}
              variant="standard"
              style={{ maxWidth: "180px" }}
            />
            <TextField
              disabled
              label="Email"
              type="email"
              value={txt.email}
              variant="standard"
              style={{ maxWidth: "350px" }}
            />
            <TextField
              disabled
              label="Descrição"
              multiline
              maxRows={4}
              value={txt.descricao}
              variant="standard"
            />
          </Grid>
          <Grid item xs={4}>
            <CardMedia component="img" image={txt.imagem} />
          </Grid>
        </Grid>
        <CenteredContainer>
          <Button variant="contained">Editar</Button>
        </CenteredContainer>
      </Box>
    </>
  );
}
