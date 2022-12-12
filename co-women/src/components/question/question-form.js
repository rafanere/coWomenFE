import { Button, Card, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const cardStyle = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  paddingInline: "10vh",
};

export default function QuestionForm() {
  const [question, setQuestion] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (question.length < 10) {
      formErrors = true;
      toast.error("Pergunta deve ter pelo menos 10 caracteres");
    }

    if (formErrors) return;
  }

  return (
    <Card style={cardStyle} component="form" onSubmit={handleSubmit}>
      <Grid container padding="3px" xs={12}>
        <Grid item xs={12}>
          <TextField
            multiline
            minRows={2}
            maxRows={2}
            placeholder="Insira sua pergunta"
            style={{ minWidth: "50%" }}
            inputProps={{ maxLength: 150 }}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" size="small" type="submit">
            Enviar pergunta
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
