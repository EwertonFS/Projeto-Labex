import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, TextField} from "@mui/material"
import { FormContainer } from "../../components/FormContainer/FormContainer";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "../../hook/useForm";











const SignUp = () => {

  // primeiro foi feito um mock , como ela vai variar com o tempo foi transformado para estado
  const [trips , setTrips]= useState([])

  const[form,onChangeInput]= useForm({

    name:'',
    age:'',
    aplicationText:'',
    profession:'',
    country:'',
    trip: null
  })
  
  

// Renderiza automaticamente e o array vazio que não será renderizado novamente , não vai executar novamente o useEffect

useEffect(()=>{
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ewerton-moreira/trips')
  .then((response)=>{
  
  setTrips(response.data.trips)
  })
  .catch(()=>{
  
  })
  
  },[])
  
  
  const onSubmitApplication = (event) => {
    event.preventDefault()
    console.log(form)
//     const body =
//     {
//     "name": form.name,
//     "age": form.age,
//     "applicationText": form.applicationText,
//     "profession": form.profession,
//     "country": form.country

//     axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${form.trips.id}/apply`)
// }

  }

  return (
    <>
      <PageTitle infoName={"Inscrição"} />
      <FormContainer onSubmit={onSubmitApplication}>
        
        <TextField 
        label={"Nome do Candidato"} 
        onChange={onChangeInput}
        value={form['name']}
        name={'name'}
        />
        <TextField 
        label={"Idade"}
        onChange={onChangeInput}
        value={form['age']}
        name={'age'}  
        />
        <TextField 
        label={"Texto De Aplicação"} helperText={'Explique por que você é um(a) bom(a) candidato(a)'}  
        onChange={onChangeInput}
        value={form['aplicationText']}
        name={'aplicationText'}
        />
       
        <TextField 
        label ={'Profissão'}
        onChange={onChangeInput}
        value={form['profession']}
        name={'profession'}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        
        
        <InputLabel id="select paises">Países</InputLabel>
        
        <Select
          labelId="select paises"
          onChange={onChangeInput}
          value={form['country']}
          name={'country'}
        >
          <MenuItem value={'brasil'}>Brasil</MenuItem>
          <MenuItem value={'argentina'}>Argentina</MenuItem>
          <MenuItem value={'eua'}>Estados Unidos</MenuItem>
        </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select paises">Viagens</InputLabel>
        
        <Select
          labelId="select-planetas"
          onChange={onChangeInput}
          value={form['trip']}
          name={'trip'}
        >
          {trips.map((trips)=>{
            return   <MenuItem value={trips}>{trips.name}</MenuItem>
          })}
        
        </Select>
        </FormControl>
        
       
      
       
          <Button variant={"contained"} color={"primary"} type={"submit"}>
            {" "}
            Finalizar
          </Button>
        
      </FormContainer>
    </>
  );
};

export default SignUp;
