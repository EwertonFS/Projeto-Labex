import * as React from "react";
import { Typography } from "@mui/material";
import { CardContainer } from "./styled";
import CandidatesInfo from "./CandidatesInfo";
import TripsInfo from "./TripsInfo";

const TripListDetailPage = () => {
  
  const trip = {
    "durationInDays": 540,
    "planet": "Netuno",
    "name": "Surfando em Netuno",
    "date": "21/12/20",
    "description": "Nenhum surfista intergalático pode ficar fora dessa!",
    "id": "7LYGnW6OsaRM9YeiQwAq",
    "candidates": [
        {
            "applicationText": "Adoro surfar em gigantes gasosos, estava só esperando a oportunidade!",
            "age": 22,
            "name": "João Golias",
            "profession": "Surfista Profissional",
            "country": "Havaí",
            "id": "GXwG1oTWZ3xmpD7FqdHf"
        }
    ],
    "approved": []
}
  
  
  
  return (
    <>
      <div>
        <Typography variant="h2" align={"center"} gutterBottom>
          Lista Detalhes Viagens
        </Typography>
        <CardContainer>
          <CandidatesInfo candidate = {trip.candidates}/>
          <TripsInfo info={trip}/>
        </CardContainer>
      </div>
    </>
  );
};

export default TripListDetailPage;
