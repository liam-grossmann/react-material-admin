import { Avatar, Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { IUser } from "../../domain/User";
import { DataService } from "../../services/DataService";

export async function loader({ params }: { params: any }) {
  const dataService = new DataService();
  const userToReturn = dataService.getUser(params.userId);
  return userToReturn;
}

export const UserPanel = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>(useLoaderData() as IUser);
  
  const handleChange = (prop: keyof IUser) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const handleSaveButtonClick = () => {
    navigate('./../../users');
  }

  const handleCancelButtonClick = () => {
    navigate('./../../users');
  }

  return (
    <Form>
      <Grid container spacing={4}>
   
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='First name'
            required variant='outlined'
            size='small'
            error={!user.firstName}
            value={user.firstName}
            onChange={handleChange('firstName')}
            helperText={!user.firstName ? 'First name is required' : ''}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth
            label='Last name'
            required variant='outlined'
            size='small'
            error={!user.lastName}
            value={user.lastName}
            onChange={handleChange('lastName')}
            helperText={!user.firstName ? 'Last name is required' : ''}>
          </TextField>
        </Grid>
        
        <Grid item xs={6}>
          <TextField fullWidth
            label='Email Address'
            required variant='outlined'
            size='small'
            error={!user.emailAddress}
            value={user.emailAddress}
            onChange={handleChange('emailAddress')}
            helperText={!user.emailAddress ? 'Email is required' : ''}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth
            label='Date of Hire'
            required variant='outlined'
            type="date"
            size='small'
            error={!user.hiredDate}
            value={user.hiredDate}
            onChange={handleChange('hiredDate')}
            helperText={!user.emailAddress ? 'Date of Hire is required' : ''}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth
            label='Department'
            required variant='outlined'
            size='small'
            error={!user.department}
            value={user.department}
            onChange={handleChange('department')}
            helperText={!user.emailAddress ? 'Department is required' : ''}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth
            label='Job title'
            required variant='outlined'
            size='small'
            error={!user.jobTitle}
            value={user.jobTitle}
            onChange={handleChange('jobTitle')}
            helperText={!user.emailAddress ? 'Job title is required' : ''}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth
            label='Bio'
            variant='outlined'
            size='small'
            multiline
            rows={5}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <Avatar sx={{ width: 128, height: 128 }} src={user.avatar ? user.avatar : null}></Avatar>
            <Button fullWidth sx={{ maxHeight: 34 }} variant='outlined' >Upload new image</Button>
          </Stack>
        </Grid>
        
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <Button variant='contained' onClick={() => handleSaveButtonClick()}>Save</Button>
            <Button variant='contained' color='secondary' onClick={() => handleCancelButtonClick()}>Cancel</Button>
          </Stack>
        </Grid>

      </Grid>
    </Form>
  )
}