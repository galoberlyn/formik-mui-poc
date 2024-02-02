import { Autocomplete, Box, InputBaseProps, TextField, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { AutocompleteOptions } from "./types/SearchSelectTypes";
import { Image } from "../Image/Image";
import { CustomFormLabel } from "../CustomFormLabel/CustomFormLabel";
import { ErrorLabel } from "../Error/ErrorLabel";

type SelectSearchProps = InputBaseProps & {
  options: AutocompleteOptions[] | null,
  label: string
  onChange: (e: React.ChangeEvent<any>) => void
  value: AutocompleteOptions | null
  useValueAsStringArray?: boolean 
  id: string
  setFieldValue: (formKey: string, value: any) => void
  errorLabel?: string
  touched?: boolean
}

export const SelectSearch: FunctionComponent<SelectSearchProps> = ({
  options,
  label,
  value,
  id,
  setFieldValue,
  errorLabel,
  touched,
  required
}) => {

  if (options) {
    return (
      <Box>
        <CustomFormLabel label={label} id={label} required={required} />
        <Autocomplete
          id={id}
          options={options}
          autoHighlight
          value={value}
          onChange={(_, newValue) => setFieldValue(id, newValue)}
          getOptionLabel={option => option.name}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              { option.imageUrl && ( <Image src={option.imageUrl} alt="name" isSelect={true} /> )}
               <Typography>{option.name}</Typography>
            </Box>
          )}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          renderInput={(params) => (
            <TextField
            {...params}
            size="small"
            variant="outlined"
            data-test={`select_input:${id}`}
            error={touched && Boolean(errorLabel)}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
            helperText={
              errorLabel && touched && (
                  <ErrorLabel errorLabel={errorLabel} id={id} />
                )
              }
            />
          )}
        />
      </Box>
    )
  }


}