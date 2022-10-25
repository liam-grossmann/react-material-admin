import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataService } from "../../services/DataService"
import { Avatar, IconButton } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { blue, deepOrange } from '@mui/material/colors';

const dataService = new DataService();
const customers = dataService.getCustomers();

/*const listToDisplay = users.map(user =>   {
    return <Stack key={user.id + user.firstName} direction='row'>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.emailAddress}</div>
 </Stack>;
}) */


export const Customers = () => {

  const navigate = useNavigate();

  const handleEditCustomerClick = (customerId: string) => {
    navigate('./../customers/' + customerId);
}

  return (<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Mobile</TableCell>
          <TableCell>Country</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {customers.map((customer) => (
          <TableRow
            key={customer.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
                <TableCell><Avatar sx={{ bgcolor: blue[600] }}>{customer.firstName[0] + customer.lastName[0]}</Avatar></TableCell>
            <TableCell component="th" scope="row">
              {customer.firstName} {customer.lastName}
            </TableCell>
            <TableCell>{customer.emailAddress}</TableCell>
            <TableCell>{customer.mobile}</TableCell>
            <TableCell>{customer.country}</TableCell>
            <TableCell><IconButton aria-label='Edit' title='Edit' size='small' onClick={() => handleEditCustomerClick(customer.id)}><EditIcon></EditIcon></IconButton></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>);
}