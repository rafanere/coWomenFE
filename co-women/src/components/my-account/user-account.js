import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChatIcon from "@mui/icons-material/Chat";
import EventIcon from "@mui/icons-material/Event";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Container } from "@mui/material";
import PersonalData from "./personal-data";
import ServiceCard from "../cards/service-card";

const serviceCards = [
  {
    id: 0,
    nome: "A B C",
    data: "01/03/2022",
    status: "Concluído",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nasa_blue_marble.jpg/220px-Nasa_blue_marble.jpg",
  },

  {
    id: 1,
    nome: "X Y Z",
    data: "01/04/2022",
    status: "Concluído",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nasa_blue_marble.jpg/220px-Nasa_blue_marble.jpg",
  },

  {
    id: 2,
    nome: "X P T O",
    data: "01/05/2022",
    status: "Concluído",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nasa_blue_marble.jpg/220px-Nasa_blue_marble.jpg",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function UserAccount() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        boxShadow: 1,
        minWidth: "90%",
      }}
    >
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab icon={<AccountBoxIcon />} label="Dados Pessoais" />
        <Tab icon={<EventIcon />} label="Meus Serviços" />
        <Tab icon={<ChatIcon />} label="Mensagens" />
        <Tab icon={<LockIcon />} label="Segurança" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Container maxWidth="vh" border="solid">
          <Box>
            <PersonalData />
          </Box>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container maxWidth="vh" border="solid">
          <Container
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              rowGap: "2vh",
            }}
          >
            {serviceCards.map((c) => (
              <ServiceCard
                id={(c.id)}
                title={c.nome}
                image={c.imagem}
                status={c.status}
                date={c.data}
              />
            ))}
          </Container>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container maxWidth="vh" border="solid">
          <Box sx={{ height: "50vh" }}>Em construção</Box>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Container maxWidth="vh" border="solid">
          <Box sx={{ height: "50vh" }}>Em construção</Box>
        </Container>
      </TabPanel>
    </Container>
  );
}
