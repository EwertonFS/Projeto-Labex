import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CandidatesItem from './Candidates.Item';
import List from '@mui/material/List';



const CandidatesInfo = (props) => {
   
  return (
      <div>
         <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
         Lista Candidatos
        </Typography>
        <Typography sx={{ mb: 1.0 }} >
        <List>
          {/* ultilizando o map para renderinizar as listas mais uma vez */}
          {props.candidates.map(candidate =>{
            return <CandidatesItem candidate={candidate}/>
          })}
       
       {/* <CandidatesItem /> */}

        </List>
        </Typography>
      </CardContent>
        
    </Card>
      </div>
    )
}

export default CandidatesInfo