import React from 'react';
import { Button , Typography } from "@mui/material"
import { ButtonsContainer } from './styled';
import { Link } from 'react-router-dom';

   
 
const Home = () =>{
   return <>
   <div>
   <Typography variant="h1" align={'center'} gutterBottom >LabeX</Typography>
   </div>
   <ButtonsContainer>
      <Link to= {'/login'}>
      <Button variant={'outlined'} color={'primary'}>Area do Administrador</Button>
      </Link>
      <Link to= {'/inscricao'}>
      <Button variant={'contained'} color={'secondary'}>Quero me Candidatar</Button>
      </Link>
   </ButtonsContainer>
      
   </>
}

export default Home