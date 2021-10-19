import {
    TextField,
    RadioGroup,
    Checkbox,
    Select
  } from "@mui/material";

 export const renderTextField = (
    { input, label, type, meta: { touched, error }, ...custom },
  ) => (
    <TextField
      variant="outlined"
      label={label}
      type={type}
      placeholder={label}
      value={input.value}
      error={touched && error}
      {...input}
      {...custom}
    />
  );

  export const renderCheckbox = ({ input, label }) => (
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange}
    />
  );
  
 export const renderRadioGroup = ({ input, children, ...rest }) => {
    return (   
    <RadioGroup
      {...input}
      {...rest}
      value={input.value}
      onChange={input.onChange}
      children={children}
    />)
 };
  
  export const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
  ) => (
    <Select
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  );
  