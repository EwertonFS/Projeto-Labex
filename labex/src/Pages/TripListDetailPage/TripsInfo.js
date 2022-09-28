import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TripInfoItem from './TripInfoItem';



const TripsInfo = () => {
    return (
      <div>
          <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
         Informações da Viagem
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
        <TripInfoItem infoName={"name"} info={"Viagem para marte"}/>
        <TripInfoItem infoName={"Planeta"} info={"Marte"}/>
        <TripInfoItem infoName={"Data"} info={"01/07/2020"}/>
        <TripInfoItem infoName={"Descrição"} info={"Viagem maneira para colonizar marte"}/>
        <TripInfoItem infoName={"Duração em Dias"} info={"228"}/>
        </Typography>
      </CardContent>
      
    </Card>
      </div>
    )
}

export default TripsInfo