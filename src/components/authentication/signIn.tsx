import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container, Divider, FormControlLabel, FormGroup, Switch, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

// TODO: should i create a default text field with default size and width ? 
// https://github.com/creativetimofficial/material-dashboard-react/blob/main/src/layouts/authentication/sign-in/index.js

// Mui had a nice custom input which allowed users to display password using an 'eye' icon adornment.
// https://mui.com/base/react-input/#adornments
// Requires new libraries and quite a lot of custom styling so I decided not to include.

interface State {
    emailAddress: string;
    password: string;
}

export default function SignIn() {

    const navigate = useNavigate();

    const [values, setValues] = useState<State>({
        emailAddress: '',
        password: ''
    });
    
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleSignInClick = () => {
        navigate('/');
    }
    
    return (

        <Container maxWidth="xs">
            <Stack spacing={2}>
                <Typography variant='h5' textAlign='center'>Sign In</Typography>
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
                        label={<Typography variant='body2'>Remember me</Typography>} />
                </FormGroup>
    
                <Button variant='contained' color='primary' onClick={handleSignInClick}>Sign In</Button>

                <Divider></Divider>

                <Typography variant='body2'>Don't have an account? <Link to='./../signup'>Register</Link></Typography>
                <Typography variant='body2'>Forgot Password? <Link to='./../resetpassword'>Reset Password</Link></Typography>
         

            </Stack>
        </Container>
    );
}