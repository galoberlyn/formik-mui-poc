import { FormikErrors, FormikTouched } from "formik"
import { AutocompleteOptions } from "../common/components/SearchSelect/types/SearchSelectTypes"

export type RegistrationInitialData = {
  initialValues: {
    personalInfo: PersonalInfoType
    businessInfo: BusinessInfoType
  }
}

export type RegistrationData = {
  personalInfo: PersonalInfoType
  businessInfo: BusinessInfoType
}

export type CustomFormProps = {
  values: RegistrationData
  handleBlur: (e: React.ChangeEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  errors: FormikErrors<RegistrationData>
  touched: FormikTouched<RegistrationData>
  gridSize?: number
}

export type PersonalInfoType = {
  firstName: string
  lastName: string
  email: string
}

type BusinessInfoType = {
  businessType: AutocompleteOptions | null
  businessName: string
  businessSize: number
  pos: AutocompleteOptions | null
  deliveryChannel: AutocompleteOptions | null
}
