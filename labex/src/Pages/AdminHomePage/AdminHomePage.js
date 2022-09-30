import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useProtectedPage } from "../../hook/useProtectedPage";
import { useTripsList } from "../../hook/useTripsList";
import { AdmContainer } from "./styled";

const AdminHomePage = () => {
  const trips = useTripsList();
  
  useProtectedPage()
  
  
  return (
    <>
      <AdmContainer>
        <PageTitle infoName={"administração"}></PageTitle>

        <Link to={"/Administrador/viagensCriadas"}>
          <Button variant={"contained"} color={"primary"}>
            Criar Viagem
          </Button>
        </Link>

        <List component="nav" aria-label="secondary mailbox folders">
          {trips.map((trip) => {
            return <ListItem disablePadding>
            <Link to={`/Administrador/detalhesViagens/${trip.id}`}>
              <ListItemButton>
                <ListItemText primary={trip.name} />
              </ListItemButton>
              </Link>
            </ListItem>
          })}

          
        </List>
      </AdmContainer>
    </>
  );
};

export default AdminHomePage;
