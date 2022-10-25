import { Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { ICustomer } from "../../domain/Customer";
import { DataService } from "../../services/DataService";

export async function loader({ params }: { params: any }) {
  const dataService = new DataService();
  const customerToReturn = dataService.getCustomer(params.customerId);
  return customerToReturn;
}

export const CustomerPanel = () => {

  const navigate = useNavigate();

  const [customer, setCustomer] = useState<ICustomer>(useLoaderData() as ICustomer);
  
  if (!customer) {
    return <div>Not found</div>;
  }

  const handleChange = (prop: keyof ICustomer) => (event: React.ChangeEvent<HTMLInputElement>) => {
    console.debug(prop);
    setCustomer({ ...customer, [prop]: event.target.value });
  };

  const handleSaveButtonClick = () => {
    navigate('./../../customers');
  }

  const handleCancelButtonClick = () => {
    navigate('./../../customers');
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
            error={!customer?.firstName}
            value={customer?.firstName}
            onChange={handleChange('firstName')}
            helperText={!customer.firstName ? 'First name is required' : ''}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth
            label='Last name'
            required variant='outlined'
            size='small'
            error={!customer.lastName}
            value={customer?.lastName}
            onChange={handleChange('lastName')}
            helperText={!customer.firstName ? 'Last name is required' : ''}>
          </TextField>
        </Grid>
        
        <Grid item xs={6}>
          <TextField fullWidth
            label='Email Address'
            required variant='outlined'
            size='small'
            error={!customer.emailAddress}
            value={customer?.emailAddress}
            onChange={handleChange('emailAddress')}
            helperText={!customer.emailAddress ? 'Email is required' : ''}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth
            label='Mobile'
            required variant='outlined'
            size='small'
            error={!customer.mobile}
            value={customer?.mobile}
            onChange={handleChange('mobile')}
            helperText={!customer.mobile ? 'Mobile is required' : ''}>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth
            label='Country'
            required variant='outlined'
            size='small'
            error={!customer.country}
            value={customer?.country}
            onChange={handleChange('country')}
            helperText={!customer.country ? 'Country is required' : ''}>
          </TextField>
        </Grid>

        
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <Button variant='contained' onClick={handleSaveButtonClick}>Save</Button>
            <Button variant='contained' color='secondary' onClick={handleCancelButtonClick}>Cancel</Button>
          </Stack>
        </Grid>

      </Grid>
    </Form>
  )
}