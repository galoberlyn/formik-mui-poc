import { 
  TextFieldProps, 
  InputBaseProps 
} from "@mui/material"
import { FormikErrors, FormikTouched } from "formik"
import { RegistrationData } from "../../../../types/RegistrationData"


type CustomInputProps = {
  label: string
  errorLabel?: string
  inputMode?: TextFieldProps['inputMode']
  touched?: boolean
  gridSize?: number
}

export type FieldProps = {
  errors: FormikErrors<RegistrationData>
  touched: FormikTouched<RegistrationData>
  values: RegistrationData
}
  

export type GenericInputProps = CustomInputProps & InputBaseProps;

