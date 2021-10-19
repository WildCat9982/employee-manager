import employeeReducer from './employee';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = {
  employees: employeeReducer,
  employeeForm: reduxFormReducer
}

export default rootReducer;

