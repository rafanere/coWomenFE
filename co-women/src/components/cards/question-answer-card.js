import { Card, Grid, Typography } from "@mui/material";
import { SpacedContainer } from "../../styles/spaced-container";

const cardStyle = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  padding: 3,
  margin: 2
};

export default function QuestionAnswerCard({
  id,
  question,
  answer,
  dateQuestion,
  dateAnswer,
}) {
  return (
    <Card style={cardStyle} key={id}>
      <Grid container padding="3px" xs={12}>
        <Grid item xs={9}>
          <SpacedContainer>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              align="right"
              margin="0"
              style={{ fontWeight: 600 }}
            >
              {question}
            </Typography>
          </SpacedContainer>
        </Grid>
        <Grid item xs={3}>
          <SpacedContainer>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              align="right"
              width={"100%"}
            >
              {dateQuestion}
            </Typography>
          </SpacedContainer>
        </Grid>
        <Grid item xs={9}>
          <SpacedContainer>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              align="right"
              margin="0"
            >
              {answer}
            </Typography>
          </SpacedContainer>
        </Grid>
        <Grid item xs={3}>
          <SpacedContainer>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              align="right"
              width={"100%"}
            >
              {dateAnswer}
            </Typography>
          </SpacedContainer>
        </Grid>
      </Grid>
    </Card>
  );
}
