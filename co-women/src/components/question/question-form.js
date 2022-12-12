import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const cardStyle = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  maxWidth: "350px",
  padding: 1,
  margin: 1,
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
      <TextField
        multiline
        minRows={2}
        maxRows={2}
        placeholder="Insira sua pergunta"
        sx={{ marginBottom: 1 }}
        inputProps={{ maxLength: 150 }}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button variant="contained" size="small" type="submit">
        Enviar pergunta
      </Button>
    </Card>
  );
}
