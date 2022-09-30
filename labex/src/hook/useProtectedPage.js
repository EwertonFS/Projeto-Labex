import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


//logica de rederinização de paginas nao permitidas a todos
export const useProtectedPage = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = window.localStorage.getItem('token')
    if(!token){
    navigate('/login')
  }
},[navigate])
}