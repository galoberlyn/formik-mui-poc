import { FieldProps } from "../../../../common/components/Input/types/InputTypes";

export const usePersonalInfo = (props: FieldProps) => {

  const mode = 'personalInfo';
  const { errors, touched, values } = props;

  const fieldProps = [
    {
      gridSize: 6,
      id: `${mode}.firstName`,
      errorLabel: errors[mode]?.firstName,
      touched: touched[mode]?.firstName,
      value: values[mode]?.firstName,
      label: 'First name',
      type: 'text',
      fullWidth: true
    },
    {
      gridSize: 6,
      id: `${mode}.lastName`,
      errorLabel: errors[mode]?.lastName,
      touched: touched[mode]?.lastName,
      value: values[mode]?.lastName,
      label: 'Last name',
      type: 'text',
      fullWidth: true
    }, 
    {
      gridSize: 12,
      id: `${mode}.email`,
      errorLabel: errors[mode]?.email,
      touched: touched[mode]?.email,
      value: values[mode]?.email,
      label: 'Email',
      type: 'text',
      fullWidth: true
    }, 
  ];
  
  return {
    fieldProps
  };
}