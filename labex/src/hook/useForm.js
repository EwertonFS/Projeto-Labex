//usa os hooks do react e retorna oque os componentes forem usar
// o hooke aproveita logica de estados e de life cicle



import { useState } from "react"

export const useForm = (initialState) => {
    const [form,setForm]= useState(initialState)
    
    const onChangeInput = (event) => {
      const newValue = event.target.value
      const fieldName = event.target.name
    
      //ou podia desestruturar mas nao funcionou nao sei pq
      // const {newValue,fieldName}=event.target

      
      setForm({...form, [fieldName]: newValue})
    }
      // const cleanFields = () => {
      //   setForm(initialState)
      // }


    return [form , onChangeInput ]
}