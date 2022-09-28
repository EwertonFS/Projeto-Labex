import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CandidatesItem from './Candidates.Item';
import List from '@mui/material/List';



const CandidatesInfo = () => {
    return (
      <div>
         <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
         Lista Candidatos
        </Typography>
        <Typography sx={{ mb: 1.0 }} >
        <List>
        <CandidatesItem></CandidatesItem>
        <CandidatesItem></CandidatesItem>
        </List>
        </Typography>
      </CardContent>
        
    </Card>
      </div>
    )
}

export default CandidatesInfo