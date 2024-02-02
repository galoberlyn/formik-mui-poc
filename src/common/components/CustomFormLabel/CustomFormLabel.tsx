import { Typography, Box, InputLabel, ClassNameMap, InputProps } from '@mui/material';
import { FunctionComponent } from 'react';

type CustomFormLabel = InputProps & {
  label: string
  id: string,
  classes?: Partial<ClassNameMap<GenericLabelClasses>>
}

export type GenericLabelClasses =
  | 'labelContainer'
  | 'label'
  | 'labelAsterisk'

export const CustomFormLabel: FunctionComponent<CustomFormLabel> = ({ label, id, classes, required }) => {

  if (label) {

    return (
      <Box className={classes?.labelContainer}>
        <Typography component="span" variant="subtitle1">
          <InputLabel
            htmlFor={id}
            required={required}
            className={classes?.label}
            classes={{
              asterisk: classes?.labelAsterisk,
            }}
            data-test={`text_input:label:${id}`}
          >
            {label}
          </InputLabel>
        </Typography>
      </Box>
    )
  }

  return null
}