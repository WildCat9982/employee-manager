import createSlice from '../../utils/createSlice';

const { reducer, actions } = createSlice( {name: "employees", uri:"/employees"}, []);

export const getAllEmployees = () => actions.getAll();
export const createEmployee = (data) => actions.createOne(data);
export const deleteEmployee = (id) => actions.deleteOne(id);
export const updateEmployee = (id, data) => actions.updateOne(id, data);
export const getEmployeeById = (id) => actions.getOne(id);

export const { getAll, createOne, deleteOne, updateOne, getOne } = actions;
export default reducer;
