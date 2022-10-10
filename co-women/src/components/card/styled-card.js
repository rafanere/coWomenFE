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

export default function StyledCard() {
  return (
    <Card className="App-card">
      <Grid container spacing={2}>
        <Grid item xs={4} spacing={2} sx={{ maxWidth: "100px" }}>
          <CardMedia
            className="App-media"
            component="img"
            image="https://picsum.photos/200/"
            title="teste do teste"
            
          />
          <Rating value={4} size="small" readOnly />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Fulana
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Descrição da Fulana Perfil
              sasadsa asd asdas as dadasd
              sad asdasdas dasdasd as dasdasd
              sad asdadasdadadasdasdadasda dasdsa
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
