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
import { useNavigate } from "react-router-dom";
import { allServices } from "../../services/all-services";
import { CenteredContainer } from "../../styles/centered-container";

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

export default function AdsCard({ id, title, description, image, avaliacao }) {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    await allServices.getAdDetails(id);
    navigate("/ads-details");
  }

  return (
    <Card
      key={{ id }}
      className="App-card"
      style={cardStyle}
      sx={{ display: "flex", flexWrap: "wrap" }}
    >
      <Grid container padding="3px" spacing={2}>
        <Grid item xs={4} style={cardMediaStyle}>
          <CardMedia component="img" image={image} sx ={{maxHeight: "60px"}} />
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
              align="justify"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CenteredContainer>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            type="submit"
            onClick={handleSubmit}
          >
            Ver detalhes
          </Button>
        </CardActions>
      </CenteredContainer>
    </Card>
  );
}
