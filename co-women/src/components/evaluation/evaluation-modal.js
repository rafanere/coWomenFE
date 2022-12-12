import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Rating, TextField, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { CenteredContainer } from "../../styles/centered-container";
import { useState } from "react";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function EvaluationModal() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (rating < 0.5) {
      formErrors = true;
      toast.error("Selecione o número de estrelas para avaliação");
    }

    if (comment.length < 10) {
      formErrors = true;
      toast.error("Comentário deve ter pelo menos 10 caracteres");
    }

    if (formErrors) return;
  }

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleOpen}>
        Avaliar
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body1" component="h2">
                Avalie o serviço prestado
              </Typography>
              <Button onClick={handleClose} sx={{ color: "white" }}>
                <CloseIcon />
              </Button>
            </Toolbar>
          </AppBar>
          <Container sx={{ p: 1 }} component="form" onSubmit={handleSubmit}>
            <Container>
              <Typography variant="subtitle2">
                Quantas estrelas merece o serviço prestado?
              </Typography>
              <Rating
                value={rating}
                precision={0.5}
                onChange={(e) => setRating(e.target.value)}
              />
            </Container>
            <Container sx={{ mt: 1, mb: 1 }}>
              <TextField
                multiline
                minRows={2}
                maxRows={2}
                placeholder="Comentário"
                style={{ minWidth: "100%" }}
                inputProps={{ maxLength: 150 }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Container>
            <CenteredContainer>
              <Button variant="contained" size="small" type="submit">
                Enviar avaliação
              </Button>
            </CenteredContainer>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
