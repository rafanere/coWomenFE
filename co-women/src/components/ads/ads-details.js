import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import EvaluationCard from "../cards/evaluation-card";
import QuestionAnswerCard from "../cards/question-answer-card";
import QuestionForm from "../question/question-form";

const cardStyle = {
  alignItems: "center",
  justify: "center",
  padding: "2vh",
};

const cardMediaStyle = {
  maxWidth: "100px",
  alignItems: "center",
  padding: "3px",
};

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
    <>
      <Card
        style={cardStyle}
        sx={{ display: "flex", flexWrap: "wrap", alignItems: "left" }}
      >
        <Grid container padding="3px">
          <Grid item xs={4} style={cardMediaStyle}>
            <CardMedia
              component="img"
              image={image}
              title="teste do teste"
              height="140px"
            />
          </Grid>
          <Grid item xs={8}>
            <CardContent
              sx={{
                padding: "3px",
                "&:last-child": {
                  paddingBottom: "3px",
                },
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="left"
              >
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                align="justify"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                }}
              >
                {description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <CardActions>
          <Button variant="contained" size="medium">
            Contato
          </Button>
        </CardActions>

        <Container sx={{ display: "flex", flexDirection: "column" }}>
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
        <Container sx={{ display: "flex", flexDirection: "row" }}>
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
    </>
  );
}
