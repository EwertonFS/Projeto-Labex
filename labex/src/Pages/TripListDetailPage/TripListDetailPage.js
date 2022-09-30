import * as React from "react";
import { Typography } from "@mui/material";
import { CardContainer } from "./styled";
import CandidatesInfo from "./CandidatesInfo";
import TripsInfo from "./TripsInfo";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProtectedPage } from "../../hook/useProtectedPage";

const TripListDetailPage = () => {
  const [trip , setTrip] = useState()
  const params = useParams()

  useProtectedPage()






  const getTripDetail = () =>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ewerton-moreira/trip/${params.tripId}`,{
      headers:{
        auth:window.localStorage.getItem('token')
      }
    }).then((response)=>{
     setTrip(response.data.trip)
    })
  }
  useEffect(()=>{
    getTripDetail()

  },[])  
  
    
  const decideCandidate = (approve,candidateId) => {
    const body = {
      approve : approve
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ewerton-moreira/trips/${params.tripId}/candidates/${candidateId}/decide`, body,{
      headers: {
       auth:window.localStorage.getItem(`token`)
      }
    }).then(()=>{
      getTripDetail()
    })
  }
  
  return (
    <>
      <div>
        {}
        <Typography variant="h2" align={"center"} gutterBottom>
          Lista Detalhes Viagens
        </Typography>
        {/* esse conteudo vai ser renderizado caso a trip exista */}
        {trip ? <CardContainer>
          <TripsInfo info={trip}/>
          <CandidatesInfo list = {trip.candidates}  decideCandidate={decideCandidate}/>
        </CardContainer>:<div>carregando...</div>}
      </div>
    </>
  );
};

export default TripListDetailPage;
