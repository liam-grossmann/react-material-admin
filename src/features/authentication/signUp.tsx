import { useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";
import { Button, Container, Divider, FormControlLabel, FormGroup, Switch, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

// Mui had a nice custom input which allowed users to display password using an 'eye' icon adornment.
// https://mui.com/base/react-input/#adornments
// Requires new libraries and quite a lot of custom styling so I decided not to include.

export default function SignUp() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showFirstNameError, setShowFirstNameError] = useState<boolean>(false);
    const [showLastNameError, setShowLastNameError] = useState<boolean>(false);
    const [showEmailAddressError, setShowEmailAddressError] = useState<boolean>(false);
    const [showPasswordError, setShowPasswordError] = useState<boolean>(false);

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFirstName(e.target.value);
        setShowFirstNameError(false);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLastName(e.target.value);
        setShowLastNameError(false);
    };

    const handleEmailAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailAddress(e.target.value);
        setShowEmailAddressError(false);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(e.target.value);
        setShowPasswordError(false);
    };

    // For demo purposes fields are not validated. We always go back to home. 
    const handleRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/');

        // Code here to validate inputs. Ensure valid email. Ensure password is complicated etc.
        if (firstName.trim() === '') {
            setShowFirstNameError(true);
            return;
        }
        if (lastName.trim() === '') {
            setShowLastNameError(true);
            return;
        }
        if (emailAddress.trim() === '') {
            setShowEmailAddressError(true);
            return;
        }
        if (password.trim() === '') {
            setShowPasswordError(true);
            return;
        }

        // Code here to register user, send valiation email and display a message to tell user to check their email 
        // Call API and check for errors. For example, perhaps email already registered? 
        navigate('/');
    }

    return (

        <Container maxWidth="xs" sx={{
            maxWidth: '100px',
            height: '500px',
            paddingTop: '50px',
            marginTop: '50px',
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 4}}>
            <Stack spacing={2}>
                <Typography variant='h5' textAlign='center'>Sign Up</Typography>

                <Form>
                    <Stack spacing={2}>
                        <TextField label='First name'
                            required variant='outlined'
                            size='small'
                            error={showFirstNameError}
                            value={firstName}
                            onChange={(e) => handleFirstNameChange(e)}
                            helperText={showFirstNameError ? 'First name is required' : ''}>
                        </TextField>

                        <TextField label='Last name'
                            required variant='outlined'
                            size='small'
                            error={showLastNameError}
                            value={lastName}
                            onChange={(e) => handleLastNameChange(e)}
                            helperText={showLastNameError ? 'Last name is required' : ''}>
                        </TextField>

                        <TextField label='Email Address'
                            required variant='outlined'
                            size='small'
                            error={showEmailAddressError}
                            value={emailAddress}
                            onChange={(e) => handleEmailAddressChange(e)}
                            helperText={showEmailAddressError ? 'Email is required' : ''}>
                        </TextField>

                        <TextField label='Password'
                            required variant='outlined'
                            size='small'
                            type='password'
                            error={showPasswordError}
                            value={password}
                            onChange={(e) => handlePasswordChange(e)}
                            helperText={showPasswordError ? 'Password is required' : 'Do not share your password with anyone'}>
                        </TextField>



                        <FormGroup>
                            <FormControlLabel control={<Switch size="small" />}
                                label={<Typography variant='body2'>I have read the <Link to=''>terms and conditions</Link></Typography>} />
                        </FormGroup>

                        <Button fullWidth
                            type="submit"
                            variant='contained'
                            color='primary'
                            onClick={(e) => handleRegisterClick(e)}>Register
                        </Button>
                    </Stack>

                </Form>
                <Divider></Divider>

                <Typography variant='body2'>Already have an account? <Link to='./../signin'>Sign In</Link></Typography>

            </Stack>
        </Container>
    );
}