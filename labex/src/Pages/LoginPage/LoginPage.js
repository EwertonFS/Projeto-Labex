import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "../../hook/useForm";
import { LoginForm } from "./styled";

import { useNavigate } from "react-router-dom";




const LoginPage = () => {
  //ultilizando o V.6 navigate para redirecionar a página após 
  let navigate = useNavigate();
   
   
   //aqui usando o hook do formulário
  const [form, onChangeInput] = useForm({
    email: "",
    password: "",
  });

  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log(form);
    const body = {
      email:form.email,
      password:form.password
   }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ewerton-moreira/login',body)
    .then((response)=>{
      console.log(response.data.token)
      //armazenando o Token no local storage
      window.localStorage.setItem('token', response.data.token)
      //verificar se for guardado  f12/application/localstrogage/localhost
     // direcionando o navegador
   
     navigate('/administrador')
    })
  };

  return (
    <>
      <div>
        <Typography variant="h1" align={"center"} gutterBottom>
          Login
        </Typography>
      </div>
      <LoginForm onSubmit={onSubmitLogin}>
        <TextField
          label={"Email"}
          type={"email"}
          onChange={onChangeInput}
          value={form["email"]}
          name={"email"}
        />
        <TextField
          label={"Senha"}
          type={"password"}
          onChange={onChangeInput}
          value={form["password"]}
          name={"password"}
        />
        {/* <Link to={'/Administrador'}> */}
        <Button variant={"contained"} color={"primary"} type={"submit"} >
          {" "}
          Entrar
        </Button>
        {/* </Link> */}
      </LoginForm>
    </>
  );
};

export default LoginPage;
