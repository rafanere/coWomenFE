import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { allServices } from "../../services/all-services";
import EvaluationCard from "../cards/evaluation-card";
import QuestionAnswerCard from "../cards/question-answer-card";
import QuestionForm from "../question/question-form";
import moment from "moment";

export default function AdsDetails({
  id,
  title,
  description,
  image,
  avaliacao,
}) {
  const [evaluation, setEvaluation] = useState([]);
  async function getEvaluation() {
    await allServices.getAdEvaluations(id).then((evaluation) => {
      setEvaluation(evaluation);
      console.log("evaluation", evaluation);
    });
  }

  const [answersQuestions, setAnswersQuestions] = useState([]);
  async function getAnswersQuestions() {
    await allServices.getQuestionsAndAnswers(id).then((answersQuestions) => {
      setAnswersQuestions(answersQuestions);
      console.log("answersQuestions no useEffect", answersQuestions);
    });
  }

  useEffect(() => {
    getAnswersQuestions();
    getEvaluation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "left",
        padding: 0,
        margin: 0,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 0,
          margin: 0,
        }}
      >
        <CardMedia
          component="img"
          title="foto do perfil"
          image={image}
          sx={{ height: "100px", width: "100px", margin: 1 }}
        />
        <CardContent
          sx={{
            padding: "3px",
            "&:last-child": {
              paddingBottom: "3px",
            },
          }}
        >
          <Typography
            variant="h4"
            component="div"
            align="left"
            sx={{ padding: 1, margin: 1 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="justify"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              padding: 1,
              margin: 1,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <Button variant="contained" size="medium">
          Entrar em contato
        </Button>
      </Container>

      <Container sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
        <QuestionForm />
        <Typography variant="h6" sx={{ pt: 2 }}>
          Perguntas já respondidas
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "left",
          minWidth: "80%",
        }}
      >
        {answersQuestions.length > 0 ? (
          answersQuestions.map((item) => (
            <QuestionAnswerCard
              question={item.questionText}
              dateQuestion={moment(item.questionDate).format("DD/MM/YYYY")}
              answer={item.answerText}
              dateAnswer={moment(item.answerDate).format("DD/MM/YYYY")}
            />
          ))
        ) : (
          <Typography variant="h5">
            Nenhuma pergunta foi feita e/ou respondida ainda.
          </Typography>
        )}
      </Container>
      <Container sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
        <Typography variant="h6">Avaliações</Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "left",
          minWidth: "80%",
        }}
      >
        {evaluation.length > 0 ? (
          evaluation.map((e) => (
            <EvaluationCard
              avaliacao={e.stars}
              description={e.description}
              title={e.idUser}
              date={moment(e.date).format("DD/MM/YYYY")}
            />
          ))
        ) : (
          <Typography variant="h5">
            Nenhuma avaliação foi feita ainda.
          </Typography>
        )}
      </Container>
    </Card>
  );
}
