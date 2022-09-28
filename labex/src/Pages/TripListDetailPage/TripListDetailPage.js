import * as React from "react";
import {  Typography } from "@mui/material"
import { CardContainer} from "./styled";
import CandidatesInfo from "./CandidatesInfo";
import TripsInfo from "./TripsInfo";





const TripListDetailPage = () => {
  return (
    <>
    <div>
    <Typography variant="h2" align={'center'} gutterBottom >Lista Detalhes Viagens</Typography>
    <CardContainer>
    <CandidatesInfo>
    </CandidatesInfo>
    <TripsInfo>

    </TripsInfo>
    
   
    
    </CardContainer>
   
    </div>
      
    </>
  );
};

export default TripListDetailPage;
