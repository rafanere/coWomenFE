import { Button, Card, Grid, TextField } from "@mui/material";

const cardStyle = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  paddingInline: "10vh",
};

export default function QuestionForm() {
  return (
    <Card style={cardStyle}>
      <Grid container padding="3px" xs={12}>
        <Grid item xs={12}>
          <TextField
            multiline
            minRows={2}
            maxRows={2}
            placeholder="Insira sua pergunta"
            style={{ minWidth: "50%" }}
            inputProps={{ maxLength: 150 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" size="small">
            Enviar pergunta
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
