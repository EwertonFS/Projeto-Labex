import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { FormContainer } from "../../components/FormContainer/FormContainer";

const CreatedTripsListPage = () => {
  
  
  
  return (
    <>
      <PageTitle infoName={"Criar Viagem"} />
      <FormContainer>
        <TextField label={"Nome"} />
        <TextField label={"Planeta"} />
        <TextField type={"date"} />
        <TextField label={"Descrição"} />
        <TextField label={"Duração em dias"} type={"number"} />

        <Link to={"/Administrador"}>
          <Button variant={"contained"} color={"primary"} type={"submit"}>
            {" "}
            Finalizar
          </Button>
        </Link>
      </FormContainer>
    </>
  );
};

export default CreatedTripsListPage;
