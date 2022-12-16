import { Button, Card, TextField } from "@mui/material";
import axios from "axios";
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
    const token = localStorage.getItem("token");
    axios
      .post(`https://cowomenbe.onrender.com/question/?token=${token}`, {
        question: question,
        idUser: localStorage.getItem("userId"),
        idAds: localStorage.getItem("AdId"),
      })
      .then((response) => {
        console.log("response", response);
        setQuestion("");
        toast.success(
          "Pergunta cadastrada com sucesso! Ela será exibida quando for respondida pela prestadora de serviços"
        );
      })
      .catch((error) => {
        console.log(error);
        toast.success("Erro ao cadastrar pergunta");
      });
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
