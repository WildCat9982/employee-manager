import React from 'react'
import EmployeeForm from '../components/employee-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};


export const AddEditEmployee = () => {
    return (
        <EmployeeForm onSubmit={showResults} />
    )
}
