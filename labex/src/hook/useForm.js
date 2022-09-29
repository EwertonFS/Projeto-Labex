//usa os hooks do react e retorna oque os componentes forem usar
// o hooke aproveita logica de estados e de life cicle



import { useState } from "react"

export const useForm = (initialState) => {
    const [form,setForm]= useState(initialState)
    
    const onChangeInput = (event) => {
      const newValue = event.target.value
      const fieldName = event.target.name
    
      setForm({...form, [fieldName]: newValue})
    }

    return [form , onChangeInput]
}