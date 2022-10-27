import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";
import { Button, Container, Divider, FormControlLabel, FormGroup, Switch, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IUser } from "../../domain/User";
import { DataService } from "../../services/DataService";

// TODO: should i create a default text field with default size and width ? 
// https://github.com/creativetimofficial/material-dashboard-react/blob/main/src/layouts/authentication/sign-in/index.js

// Mui had a nice custom input which allowed users to display password using an 'eye' icon adornment.
// https://mui.com/base/react-input/#adornments
// Requires new libraries and quite a lot of custom styling so I decided not to include.

export interface ISignInProps {
    onSignIn : Dispatch<SetStateAction<IUser | undefined>>;
}


export default function SignIn(props : ISignInProps) {

    const navigate = useNavigate();

    const [emailAddress, setEmailAddress] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showEmailAddressError, setShowEmailAddressError] = useState<boolean>(false);
    const [showPasswordError, setShowPasswordError] = useState<boolean>(false);

    const handleEmailAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailAddress(e.target.value);
        setShowEmailAddressError(false);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(e.target.value);
        setShowPasswordError(false);
    };

    // For demo purposes fields are not validated. We always go back to home. 
    const handleSignInClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Here you would call an API to get the user. We just set user to 3rd user in the list and 
        // set the user on the main form. This will in turn reset the user for the entire app.
        // You should see the avatar change (unless we happen to selec the same user that we had before).
        // This is pretty much all the code you'll need to sign in a valid user and reset the user context
        // for the entire application. 
        let dataService = new DataService();
        let signedInUser = dataService.getUser(getRandomInt(0, 7));
        props.onSignIn(signedInUser);
        navigate('/');

        // Code here to validate inputs. Ensure valid email. 
        if (emailAddress.trim() === '') {
            setShowEmailAddressError(true);
            return;
        }
        if (password.trim() === '') {
            setShowPasswordError(true);
            return;
        }

        // Code here to register authenticate user.
        // Call API and check for errors. For example, user may not exist; password incorrect;
        // Too many password attempts etc. Lock user out ?
        navigate('/');
    }

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    return (

        <Container maxWidth="xs"
        sx={{
            maxWidth: '100px',
            height: '500px',
            paddingTop: '50px',
            marginTop: '50px',
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 4}}>
            <Stack spacing={4}>
                <Typography variant='h5' textAlign='center'>Sign In</Typography>

                <Form className="passwordForm">
                    <Stack spacing={2}>
                        <TextField fullWidth
                            label='Email Address'
                            required variant='outlined'
                            size='small'
                            error={showEmailAddressError}
                            value={emailAddress}
                            onChange={(e) => handleEmailAddressChange(e)}
                            helperText={showEmailAddressError ? 'Email is required' : ''}>
                        </TextField>

                        <TextField fullWidth
                            label='Password'
                            required variant='outlined'
                            size='small'
                            type='password'
                            error={showPasswordError}
                            value={password}
                            onChange={(e) => handlePasswordChange(e)}
                            helperText={showPasswordError ? 'Password is required' : 'Do not share your password with anyone'
                            }>
                        </TextField>

                        <FormGroup>
                            <FormControlLabel control={<Switch size="small" />}
                                label={<Typography variant='body2'>Remember me</Typography>} />
                        </FormGroup>

                        <Button
                            fullWidth
                            type="submit"
                            variant='contained'
                            color='primary'
                            onClick={(e) => handleSignInClick(e)}>Sign In
                        </Button>


                    </Stack>
                </Form>

                <Divider></Divider>

                <Typography variant='body2'>Don't have an account? <Link to='./../signup'>Register</Link></Typography>
                <Typography variant='body2'>Forgot Password? <Link to='./../resetpassword'>Reset Password</Link></Typography>


            </Stack>
        </Container>
    );
}