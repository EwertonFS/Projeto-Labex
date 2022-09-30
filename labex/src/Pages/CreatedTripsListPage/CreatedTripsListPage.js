import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, TextField } from "@mui/material";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { useForm } from "../../hook/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hook/useProtectedPage";
// import { useState } from "react";



const CreatedTripsListPage = () => {
  const navigate = useNavigate()
  
  const  [form, onChangeInput ] = useForm(
    
    {
      name:'',
      planet:'',
      description:'',
      durationInDays:'',
      date:''
    }
    )
    
  useProtectedPage()

const onSubimitForm = (event) => {
  event.preventDefault()
 // para ver como os  dados estavam vindo
 //console.log(form)
  console.log(form)
  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationInDays: form.durationInDays
  }
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ewerton-moreira/trips`,body,{headers:{
    auth:window.localStorage.getItem('token')
    }
  }).then((response)=>{
    navigate('/Administrador');
  })
}
  

  
  
  return (
    <>
      <PageTitle infoName={"Criar Viagem"} />
      <FormContainer onSubmit={onSubimitForm}>
        <TextField 
        
           label={'Nome'}
           onChange={onChangeInput}
           name={'name'}
           value={form['name']}
           />
        <TextField 
           label={'Planeta'}
           onChange={onChangeInput}
           name={'planet'}
           value={form['planet']}
            />
        <TextField
        name={'date'}
        // label= {'data'}
        onChange={onChangeInput}
        value={form['date']}  
        type={"date"}
        />
        {/* onChange={date => setDate(date)}
         */}
      
        
        <TextField 
          label={"Descrição"} 
          onChange={onChangeInput}
          name={'description'}
          value={form['description']}
           
           />
        <TextField 
        value={form['durationInDays']}
        onChange={onChangeInput}
        name={'durationInDays'}
        label={"Duração em dias"}
         type={"number"} 
         />

        
          <Button variant={"contained"} color={"primary"} type={"submit"}>
            {" "}
            Finalizar
          </Button>
       
      </FormContainer>
    </>
  );
};

export default CreatedTripsListPage;
