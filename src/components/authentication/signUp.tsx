import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Divider, FormControlLabel, FormGroup, Link, Switch, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

// Mui had a nice custom input which allowed users to display password using an 'eye' icon adornment.
// https://mui.com/base/react-input/#adornments
// Requires new libraries and quite a lot of custom styling so I decided not to include.

interface State {
    firstName: '',
    lastName: '',
    emailAddress: string;
    password: string;
}

export default function SignUp() {

    const navigate = useNavigate();

    const [values, setValues] = useState<State>({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: ''
      });
    
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleRegisterClick = () => {
        navigate('/');
    }
    
    return (

        <Container maxWidth="xs">
            <Stack spacing={2}>
                <Typography variant='h5' textAlign='center'>Sign Up</Typography>
                
                <TextField label='First name'
                    required variant='outlined'
                    size='small'
                    error={!values.firstName}
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    helperText={!values.firstName ? 'First name is required' : ''}>
                </TextField>
                           
                <TextField label='Last name'
                    required variant='outlined'
                    size='small'
                    error={!values.lastName}
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    helperText={!values.firstName ? 'Last name is required' : ''}>
                </TextField>

                <TextField label='Email Address'
                    required variant='outlined'
                    size='small'
                    error={!values.emailAddress}
                    value={values.emailAddress}
                    onChange={handleChange('emailAddress')}
                    helperText={!values.emailAddress ? 'Email is required' : ''}>
                </TextField>
            
                <TextField label='Password'
                    required variant='outlined'
                    size='small'
                    type='password'
                    error={!values.password}
                    value={values.password}
                    onChange={handleChange('password')}
                    helperText={!values.password ? 'Password is required' : 'Do not share your password with anyone'}>
                </TextField>

                <FormGroup>
                    <FormControlLabel control={<Switch size="small" />}
                        label={<Typography variant='body2'>I have read the <Link href=''>terms and conditions</Link></Typography>} />
                </FormGroup>
    
                <Button variant='contained' color='primary' onClick={handleRegisterClick}>Register</Button>

                <Divider></Divider>

                <Typography variant='body2'>Already have an account? <Link href='signin'>Sign In</Link></Typography>

            </Stack>
        </Container>
    );
}