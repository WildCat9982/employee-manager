import { Table, TableBody, TableHead, TableRow, TableCell, ButtonGroup, Button, TableContainer, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { Link } from 'react-router-dom'

import { getAll, deleteOne } from '../redux/slices/employee'

const useStyle = makeStyles({
    table: {
        width:'90%',
        marginTop: '20px',
        marginBottom: '10px',
    },
    th: {
        '& > *': {
            background: '#FFFFFF',
            color: '#FFFFFF',
            fontSize: '1.5rem'
        }
    },
    row: {
        "& > *": {
            fontSize: '1rem'
        }
    }
})

export const AllEmployees = () =>{
    const classes = useStyle()
    const employees = useSelector(state => state.employees)
    const dispatch = useDispatch()

    const initFetch = useCallback(() => {
        dispatch(getAll());
      }, [dispatch])
    

    useEffect(() => {
        initFetch();
    }, [initFetch])

    const refreshData = () => {
        
    }


    const deleteEmployeeData = (id) => {
        if (window.confirm("Are you sure want to delete this employee info?")) {
            dispatch(deleteOne({id: id}))
            .then(res => {
              refreshData();
            })
            .catch(e => {
              console.log(e);
            });
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead  className={classes.th}>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        employees && employees.map( emp => (
                            <TableRow key={emp.id}>
                                <TableCell>{emp.id}</TableCell>
                                <TableCell>{emp.first_name}</TableCell>
                                <TableCell>{emp.last_name}</TableCell>
                                <TableCell>{emp.email}</TableCell>
                                <TableCell>{emp.number}</TableCell>
                                <TableCell>{emp.gender}</TableCell>
                                <TableCell>
                                    {/* <ButtonGroup variant="contained"  > */}
                                        <Button color="primary"
                                            variant="contained" 
                                            component={Link}
                                            to={`/edit/${emp.id}`}
                                            style={{textTransform: 'none', marginRight: '8px'}}>Edit</Button>
                                        <Button color="error"
                                            variant="contained" 
                                            onClick={() => deleteEmployeeData(emp.id)}
                                            style={{textTransform: 'none'}}>Delete</Button>
                                    {/* </ButtonGroup> */}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

