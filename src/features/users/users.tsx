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

const dataService = new DataService();
const users = dataService.getUsers();

/*const listToDisplay = users.map(user =>   {
    return <Stack key={user.id + user.firstName} direction='row'>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <div>{user.emailAddress}</div>
 </Stack>;
}) */


export const Users = () => {

  const navigate = useNavigate();

  const handleEditUserClick = (userId: number) => {
    navigate('./../users/' + userId);
}

  return (<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Department</TableCell>
          <TableCell>Job Title</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell><Avatar src={user.avatar ? user.avatar : null}></Avatar></TableCell>
            <TableCell component="th" scope="row">
              {user.firstName} {user.lastName}
            </TableCell>
            <TableCell>{user.emailAddress}</TableCell>
            <TableCell>{user.department}</TableCell>
            <TableCell>{user.jobTitle}</TableCell>
            <TableCell>{user.status?.toString()}</TableCell>
            <TableCell><IconButton aria-label='Edit' title='Edit' size='small' onClick={() => handleEditUserClick(user.id)}><EditIcon></EditIcon></IconButton></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>);
}