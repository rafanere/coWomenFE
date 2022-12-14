import { Box, Grid, TextField } from "@mui/material";

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
              value={localStorage.getItem("name")}
              variant="standard"
              sx={{ maxWidth: "400px", mb: 1 }}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              disabled
              label="Sobrenome"
              type="text"
              value={localStorage.getItem("lastname")}
              variant="standard"
              sx={{ maxWidth: "400px", mb: 1 }}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              disabled
              label="CPF/CNPJ"
              type="text"
              value={localStorage.getItem("cpfcnpj")}
              variant="standard"
              sx={{ maxWidth: "180px", mb: 1 }}
              inputProps={{ maxLength: 20 }}
            />
            <TextField
              disabled
              label="Email"
              type="email"
              value={localStorage.getItem("email")}
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
