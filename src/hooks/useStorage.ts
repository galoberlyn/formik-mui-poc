import { useEffect } from "react"
import { RegistrationData } from "../types/RegistrationData"
import { storage } from "../services/storage";


export const useStorage = (values: RegistrationData) => {
  
  useEffect(() => {
    storage.save('formData', JSON.stringify(values));
  }, [values]);


  const removeStorage = () => {
    storage.removeAll()
  }

  return {
    removeStorage,
  }
}