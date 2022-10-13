import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { CenteredContainer } from "../../styles/centered-container";

const cardStyle = {
  minWidth: "300px",
  alignItems: "center",
  justify: "center",
  padding: "2vh"
};

const cardMediaStyle = {
  maxWidth: "100px",
  alignItems: "center",
  padding: "3px",
};

export default function StyledCard() {
  return (
    <Card
      className="App-card"
      style={cardStyle}
      sx={{ display: "flex", flexWrap: "wrap" }}
    >
      <Grid container padding="3px" spacing={2}>
        <Grid item xs={4} style={cardMediaStyle}>
          <CardMedia
            component="img"
            image="https://picsum.photos/200/"
            title="teste do teste"
          />
          <Rating value={4.5} precision={0.5} size="small" readOnly />
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
              variant="subtitle1"
              component="div"
              align="left"
            >
              Lorem ipsum dolor
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
                WebkitLineClamp: "5",
                WebkitBoxOrient: "vertical",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CenteredContainer>
        <CardActions>
          <Button variant="contained" size="small">
            Detalhes
          </Button>
          <Button variant="contained" size="small">
            Contato
          </Button>
        </CardActions>
      </CenteredContainer>
    </Card>
  );
}
