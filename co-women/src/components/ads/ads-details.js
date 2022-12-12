import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import EvaluationCard from "../cards/evaluation-card";
import QuestionAnswerCard from "../cards/question-answer-card";
import QuestionForm from "../question/question-form";

const evaluations = [
  {
    id: 0,
    title: "Fulaninha de Tal",
    description: "Avaliação curta",
    avaliacao: 4,
  },
  {
    id: 1,
    title: "Beltrana La La",
    description: "Avaliação um pouco mais longa, mas ainda curta",
    avaliacao: 1.3,
  },
  {
    id: 2,
    title: "Ciclana Ana",
    description:
      "ihsdhudh sdahuashudhu ashudh ahusdhusahu dhaushud ashuhu ashud huashud huasdhu ahsudhuashudhu ashud huashu ahushu ashuhaushuahudshuashudhuahud ahus dhuas huahusdh asudhuahusdhuahudshu ashu dhashud ahsu",
    avaliacao: 3.5,
  },
];

const questionAnswers = [
  {
    id: 0,
    question: "sihhasuauh sahua husahu sauh huashuahu shu?",
    answer: "jasijisa asjiajisjaj sji aji",
    dateQuestion: "01/01/2022",
    dateAnswer: "01/01/2022",
  },
  {
    id: 1,
    question: "sihhasuauh sahua ?",
    answer: "jasijisa asjiajisjaj sji aji",
    dateQuestion: "01/02/2022",
    dateAnswer: "01/02/2022",
  },
  {
    id: 2,
    question: "sahua husahu huashuahu shu?",
    answer: "jasijisa",
    dateQuestion: "01/03/2022",
    dateAnswer: "01/03/2022",
  },
];

export default function AdsDetails({
  id,
  title,
  description,
  image,
  avaliacao,
}) {
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
          sx={{ height: "100px", width: "100px", margin: 1}}
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
        <Typography variant="h6">Perguntas</Typography>
        <QuestionForm />
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "left",
          minWidth: "80%",
        }}
      >
        {questionAnswers.map((item) => (
          <QuestionAnswerCard
            item={item.id}
            question={item.question}
            answer={item.answer}
            dateQuestion={item.dateQuestion}
            dateAnswer={item.dateAnswer}
          />
        ))}
      </Container>
      <Container sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
        <Typography variant="h6">Avaliações</Typography>
        <Rating
          value={avaliacao}
          precision={0.5}
          size="medium"
          sx={{
            alignItems: "center",
          }}
          readOnly
        />
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "left",
          minWidth: "80%",
        }}
      >
        {evaluations.map((e) => (
          <EvaluationCard
            avaliacao={e.avaliacao}
            description={e.description}
            title={e.title}
          />
        ))}
      </Container>
    </Card>
  );
}
