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
          <TextField label="Insira sua pergunta" multiline maxRows={4} />
          <Button variant="contained" size="small">
            Enviar pergunta
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
