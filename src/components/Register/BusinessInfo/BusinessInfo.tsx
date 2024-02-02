import { Fragment, FunctionComponent } from "react";
import { CustomFormProps } from "../../../types/RegistrationData"
import { Input } from "../../../common/components/Input/Input";
import { Grid } from "@mui/material";
import { SelectSearch } from "../../../common/components/SearchSelect/SearchSelect";
import { useBusinessInfo } from "./hooks/useBusinessInfo";

type BusinessInfoProps = CustomFormProps & {
  setFieldValue: (formKey: string, value: any) => void
}

export const BusinessInfo: FunctionComponent<BusinessInfoProps> = ({ values, handleChange, setFieldValue, errors, handleBlur, touched }) => {

  const { 
    loading, 
    fieldProps 
  } = useBusinessInfo({ errors, touched, values });

  return (
    <Fragment>
      {fieldProps.map(field => (
        <Grid item xs={field.gridSize} key={field.id}>
          { field.isSelect ? (
            <SelectSearch 
              {...field}
              disabled={Boolean(field?.options) && loading}
              onChange={handleChange}
              setFieldValue={setFieldValue}
              onBlur={handleBlur}
            />
          ) : (
            <Input 
              {...field}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          )}
        </Grid>
      ))}
    </Fragment>
  )
}