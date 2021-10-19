import React, {useState} from "react";
import { Field, reduxForm } from 'redux-form';

import hero from "../../assets/images/3.svg";
import { Prompt } from 'react-router'
import { useHistory, useParams } from 'react-router-dom'
import {
  FormControlLabel,
  FormLabel,
  FormControl,
  Radio,
  Button,
  ButtonGroup,
  Typography,
  Grid,
  Box,
  Paper
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { renderTextField, renderRadioGroup } from '../form-components';
import { required, minLength, maxLength, phoneNumber, email} from './validate';

const genderItems = [
    { id: '1', title: 'Trans*Man', value: 'Trans*Man' },
    { id: '2', title: 'Gender Fluid', value: 'Gender Fluid' },
    { id: '3', title: 'Cis', value: 'Cis'  },
    { id: '4', title: 'Cisgender Woman', value: 'Cisgender Woman'  },
    { id: '5', title: 'Trans Female', value: 'Trans Female'  },
    { id: '6', title: 'Transexual Man', value: 'Transexual Man'  },
    { id: '7', title: 'Neutrois', value: 'Neutrois'  },
    { id: '8', title: 'Man', value: 'Man'  },
    { id: '9', title: 'Gender Fluid', value: 'Gender Fluid'  },
    { id: '10', title: 'Gender Nonconforming', value: 'Gender Nonconforming'  },
    { id: '11', title: 'Intersex', value: 'Intersex'  },
]

const useStyles = makeStyles((theme) => ({
  field: {
    color: "black",
    margin: 50,
    display: 'block'
  },
  inputField: {
    color: "black",
    width: "100%",
    margin: theme.spacing(2),
  },
  radio: {
    
  }
}));

const EmployeeForm = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const [employee, setEmployee] = useState({})
  const { handleSubmit, pristine, reset, submitting } = props;
  let { id } = useParams();
  const isAddMode = !id;
  const title = isAddMode ? "Add Employee" : "Edit Empolyee"
  return (
    <Box>
     <Prompt
        when={!pristine}
        message='You have unsaved changes, are you sure you want to leave?'
      />

    <Paper>
    <img src={hero} height="300px" alt="" />

    <form onSubmit={handleSubmit}
      noValidate
      autoComplete="off">
        <Typography
          noWrap
          align='center'
          color="secondary"
          variant="h6"
          gutterBottom
        >
          {title}
        </Typography>

      <Grid container mb={3} padding={1}>
        <Grid item md={6} sm={12} p={1}>
          <Field fullWidth className={classes.field} type="text" name="firstName" component={renderTextField} label="First Name"  validate={[required, maxLength(15), minLength(6)]}/>
        </Grid>
        <Grid item md={6} sm={12} p={1}>
          <Field fullWidth className={classes.field} type="text" name="lastName" component={renderTextField} label="Last Name" validate={[required, maxLength(15), minLength(6)]} />
        </Grid>
        <Grid item md={6} sm={12} p={1}>
          <Field fullWidth className={classes.field} type="email" name="email" component={renderTextField} label="Email" validate={[required, email]} />
        </Grid>
        <Grid item md={6} sm={12} p={1}>
          <Field fullWidth className={classes.field} type="number" name="number" component={renderTextField} label="Phone Number" validate={[required, phoneNumber]} />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
        columns={{ md: 6, lg: 12 }}
      >
        <Grid item>
          <FormControl component="fieldset" className={classes.field}>
            <FormLabel component="legend">Gender</FormLabel>
            <Field name="gender" component={renderRadioGroup} row>
              {
                  genderItems?.map( item => (
                    <FormControlLabel key={item.id} value={item.value} control={<Radio />} label={item.title} />
                  ))
              }
            </Field>
          </FormControl>
        </Grid>

        <Grid item container justifyContent="right">
          <ButtonGroup >
            <Button disabled={pristine || submitting}
              variant="contained" color="info" type="submit">
              Submit
            </Button>
            <Button variant="contained" color="error"
              onClick={() => history.push('/')}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </form>
    </Paper>
    </Box>
  );
};

export default reduxForm({
  form: 'EmployeeForm'
})(EmployeeForm);
