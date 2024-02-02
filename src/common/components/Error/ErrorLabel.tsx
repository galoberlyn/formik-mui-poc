import { Typography } from "@mui/material"
import { FunctionComponent } from "react"

export const ErrorLabel: FunctionComponent<{errorLabel: string, id?: string}> = ({ 
  errorLabel,
  id
}) => {

  return (
    <Typography
      component="span"
      variant="caption"
      data-test={`text_input:error:${id}`}
    >
      {errorLabel}
    </Typography>
  )
}