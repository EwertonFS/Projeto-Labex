import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TripInfoItem from './TripInfoItem';



const TripsInfo = (props) => {
    //faremos uma desustruturação, fica menos verboso
    const {name, planet, description,date,durationInDays}=props.info
  
  
  
  return (
      <div>
          <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
         Informações da Viagem
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
        <TripInfoItem infoName={"name"} info={name}/>
        <TripInfoItem infoName={"Planeta"} info={planet}/>
        <TripInfoItem infoName={"Data"} info={date}/>
        <TripInfoItem infoName={"Descrição"} info={description}/>
        <TripInfoItem infoName={"Duração em Dias"} info={durationInDays}/>
        </Typography>
      </CardContent>
      
    </Card>
      </div>
    )
}

export default TripsInfo