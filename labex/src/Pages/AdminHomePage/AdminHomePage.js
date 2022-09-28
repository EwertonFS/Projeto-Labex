import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { AdmContainer } from "./styled";

const AdminHomePage = () => {
  return (
    <>
      <AdmContainer>
      <Typography variant="h1" align={"center"} gutterBottom>
        Lista de Viagens
      </Typography>

      <Link to={"/Administrador/viagensCriadas"}>
        <Button variant={"contained"} color={"primary"}>
          Criar Viagem
        </Button>
      </Link>

      <Link to={"/Administrador/detalhesViagens"}>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Viagem para marte" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      <Link to={"/Administrador/detalhesViagens"}>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Viagem para Lua" />
            </ListItemButton>
          </ListItem>
        </List>
      </Link>
      </AdmContainer>
    </>
  );
};

export default AdminHomePage;
