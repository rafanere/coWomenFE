import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Rating, TextField, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { CenteredContainer } from "../../styles/centered-container";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function EvaluationModal(title, date) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleOpen}>
        Avaliar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography id="modal-modal-title" variant="body1" component="h2">
                Avalie o serviço prestado
              </Typography>
              <Button onClick={handleClose} sx={{ color: "white" }}>
                <CloseIcon />
              </Button>
            </Toolbar>
          </AppBar>
          <Container id="modal-modal-description" sx={{ p: 1 }}>
            <Container>
              Nota:
              <Rating
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Container>
            <Container sx={{ mt: 1, mb: 1 }}>
              <TextField
                multiline
                minRows={2}
                maxRows={2}
                placeholder="Comentário (opcional)"
                style={{ minWidth: "100%" }}
                inputProps={{ maxLength: 150 }}
              />
            </Container>
            <CenteredContainer>
              <Button variant="contained" size="small">
                Enviar avaliação
              </Button>
            </CenteredContainer>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
