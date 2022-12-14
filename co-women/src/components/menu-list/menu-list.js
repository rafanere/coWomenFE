import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { FormLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { allServices } from "../../services/all-services";

export default function MenuList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const token = localStorage.getItem("token");
  const [userIsLogged, setUserIsLogged] = useState(token !== null);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  console.log("Dentro do menu-list userIsLogged ->", userIsLogged);

  useEffect(() => {
    async function fetchLogged() {
      setUserIsLogged(localStorage.getItem("userIsLogged"));
      console.log(
        "Dentro do useEffect do menu-list userIsLogged ->",
        userIsLogged
      );
      if (userIsLogged) {
        const data = await allServices.getLoggedUserData();
        setUserName(data.name);
        console.log("Atualizado o username no menu-list", data.name);
      } else {
        setUserName("");
      }
    }
    fetchLogged();
  }, [userIsLogged]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    localStorage.getItem("userIsLogged", false);
    setUserName("");
    setUserIsLogged(false);
    navigate("/login")
    window.location.reload();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {userName === null || userName === "" ? (
        <FormLabel>Bem-vinda!</FormLabel>
      ) : (
        <FormLabel>Olá, {userName}!</FormLabel>
      )}

      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2, margin: "0" }}
      >
        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!userIsLogged ? (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
          </Link>
        ) : (
          <>
            <Link to="/my-account" style={{ textDecoration: "none" }}>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Minha Conta
              </MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Sair
              </MenuItem>
            </Link>
          </>
        )}
      </Menu>
    </Box>
  );
}
