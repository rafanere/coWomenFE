import { Card, Grid, Rating, Typography } from "@mui/material";
import { SpacedContainer } from "../../styles/spaced-container";

const cardStyle = {
  verticalAlign: "bottom",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  paddingInline: "10vh",
};

export default function EvaluationCard({ id, title, description, avaliacao }) {
  return (
    <Card style={cardStyle}>
      <Grid container padding="3px" xs={12}>
        <Grid item xs={6}>
          <SpacedContainer>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              align="right"
              margin="0"
            >
              {title}
            </Typography>{" "}
            <Rating
              value={avaliacao}
              precision={0.5}
              size="small"
              sx={{
                alignItems: "center",
              }}
              readOnly
            />
          </SpacedContainer>
        </Grid>
        <Grid item xs={6}>
          <SpacedContainer>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              align="right"
              width={"100%"}
            >
              dd/mm/aaaa
            </Typography>
          </SpacedContainer>
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="text.secondary"
            align="justify"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
