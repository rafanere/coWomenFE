import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChatIcon from "@mui/icons-material/Chat";
import EventIcon from "@mui/icons-material/Event";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Container, Typography } from "@mui/material";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
          <Box sx={{ bgcolor: "#fffaaa", height: "25vh" }} />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container maxWidth="vh" border="solid">
          <Box sx={{ bgcolor: "#afafaf", height: "25vh" }} />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container maxWidth="vh" border="solid">
          <Box sx={{ bgcolor: "#fadada", height: "25vh" }} />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Container maxWidth="vh" border="solid">
          <Box sx={{ bgcolor: "#cfe8fc", height: "25vh" }} />
        </Container>
      </TabPanel>
    </Container>
  );
}
