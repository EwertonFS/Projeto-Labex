
import { Route, Routes } from "react-router-dom";
import AdminHomePage from "./Pages/AdminHomePage/AdminHomePage";
import Home from "./Pages/HomePage/Home";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUp from "./Pages/SignUp/Signup";
import TripListDetailPage from "./Pages/TripListDetailPage/TripListDetailPage";
import CreatedTripsListPage from "./Pages/CreatedTripsListPage/CreatedTripsListPage";
import styled from "styled-components"
import { CssBaseline } from "@mui/material";


const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding:16px;
`
  



  
function App() {
  return (
    <AppContainer>
      <CssBaseline>
      
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/inscricao' element={<SignUp />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/Administrador' element={<AdminHomePage/>}></Route>
    <Route path='/Administrador/viagensCriadas' element={<CreatedTripsListPage />}></Route>
    <Route path='/Administrador/detalhesViagens' element={<TripListDetailPage />}></Route>
    
    </Routes>
    
    </CssBaseline>
    </AppContainer>
  )

  
  
  
  
}

export default App;
