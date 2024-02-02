import { Box, Grid } from "@mui/material"
import { formInitialValue } from "./lib/constants"
import { useFormik } from "formik";
import { PersonalInfo } from "./PersonalInfo/PersonalInfo";
import { BusinessInfo } from "./BusinessInfo/BusinessInfo";
import { Submit } from "./Submit";
import registrationSchema from "./lib/registrationSchema";
import { http } from "../../services/api";
import { useStorage } from "../../hooks/useStorage";
import { RegistrationData } from "../../types/RegistrationData";
import { storage } from "../../services/storage";

export const RegistrationForm = () => {

  const storageForm = storage.get('formData');
  const initialValues = storageForm ? { initialValues: JSON.parse(storageForm) as any } : formInitialValue;

  const formik = useFormik({
    ...initialValues,
    onSubmit: values => customSubmit(values),
    validationSchema: registrationSchema,
  });

  const { 
    handleSubmit, 
    values, 
    handleChange, 
    handleBlur, 
    setFieldValue, 
    errors, 
    touched,
    resetForm
  } = formik;


  const commonProps = { values, handleChange, handleBlur, errors, touched };
  const { removeStorage } = useStorage(values);
  
  const customSubmit = (values: RegistrationData) => {
    http.post('/account', values);
    removeStorage();
    resetForm();
    alert('Success')
    location.reload();
  }
  

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <PersonalInfo {...commonProps} />
          <BusinessInfo {...commonProps} setFieldValue={setFieldValue}/>
          <Submit />
        </Grid>
      </form>
    </Box>
  )
}
