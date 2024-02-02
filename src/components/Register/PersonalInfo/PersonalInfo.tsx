import { Fragment, FunctionComponent } from "react";
import { CustomFormProps } from "../../../types/RegistrationData"
import { Input } from "../../../common/components/Input/Input";
import { Grid } from "@mui/material";
import { usePersonalInfo } from "./hooks/usePersonalInfo";

export const PersonalInfo: FunctionComponent<CustomFormProps> = ({ errors, values, handleBlur, handleChange, touched }) => {

  const { fieldProps } = usePersonalInfo({ errors, values, touched })  

  return (
    <Fragment>
      { fieldProps.map((field) => (
        <Grid item xs={field.gridSize} key={field.id}>
          <Input 
            {...field}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
      ))}
    </Fragment>
  )
}