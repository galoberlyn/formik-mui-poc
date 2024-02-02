import { TextField } from "@mui/material"
import { FunctionComponent } from "react"
import { GenericInputProps } from "./types/InputTypes"
import { Box } from '@mui/material'
import { CustomFormLabel } from "../CustomFormLabel/CustomFormLabel"
import { ErrorLabel } from "../Error/ErrorLabel"

export const Input: FunctionComponent<GenericInputProps> = ({
  label,
  required,
  id,
  onChange,
  onBlur,
  value,
  disabled,
  errorLabel,
  inputMode,
  name,
  fullWidth,
  touched
}) => {

  return (
    <Box>
      <CustomFormLabel label={label} id={label} required={required} />
      <TextField
        data-test={`text_input:${id}`}
        id={id}
        fullWidth={fullWidth}
        name={name}
        inputMode={inputMode}
        variant="outlined"
        value={value}
        disabled={disabled}
        error={touched && Boolean(errorLabel)}
        size="small"
        onChange={onChange}
        onBlur={onBlur}
        helperText={
          errorLabel && touched && (
            <ErrorLabel errorLabel={errorLabel} id={id} />
          )
        }
      />
    </Box>
  )
}