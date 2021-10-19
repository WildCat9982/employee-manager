import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, orange, lightBlue, green } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

import { AllEmployees, AddEditEmployee, PageNotFound } from '../pages';
import { Layout } from '../components';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#fefefe'
    // },
    primary: lightBlue,
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

const EmployeeManager = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router basename="/employee">
      <Layout>
        <Switch>
          <Route exact path="/" component={AllEmployees} />
          <Route path="/add" component={AddEditEmployee} />
          <Route path="/edit/:id" component={AddEditEmployee} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default EmployeeManager;
