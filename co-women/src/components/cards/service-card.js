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

const cardStyle = {
  minWidth: "300px",
  minHeight: "180px",
  maxHeight: "200px",
  alignItems: "center",
  justify: "center",
  padding: "2vh",
};

const cardMediaStyle = {
  maxWidth: "100px",
  alignItems: "center",
  padding: "3px",
};

export default function ServiceCard({
  id,
  title,
  status,
  image,
  date,
  avaliacao,
}) {
  return (
    <Card
      className="App-card"
      style={cardStyle}
      sx={{ display: "flex", flexWrap: "wrap" }}
    >
      <Grid container padding="3px" spacing={2}>
        <Grid item xs={4} style={cardMediaStyle}>
          <CardMedia component="img" image={image} />
          <Rating value={avaliacao} precision={0.5} size="small" readOnly />
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
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              align="left"
            >
              Data: {date}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              align="left"
            >
              Status: {status}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
        <CardActions>
          <Button variant="contained" size="small">
            Avaliar
          </Button>
          <Button variant="contained" size="small">
            Denunciar
          </Button>
          <Button variant="contained" size="small">
            Outro
          </Button>
        </CardActions>
    </Card>
  );
}
