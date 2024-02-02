import { RegistrationInitialData } from "../../../types/RegistrationData";


export const BASE_URL = '/api'

export const formInitialValue: RegistrationInitialData = {
  initialValues: {
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
    },
    businessInfo: {
      businessType: null,
      pos: null,
      deliveryChannel: null,
      businessName: '',
      businessSize: 0
    }
  }
}
