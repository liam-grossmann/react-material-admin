import { useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";
import { Button, Container, Divider, Stack, TextField, Typography } from "@mui/material";

export default function ResetPassword() {

    const navigate = useNavigate();

    const [emailAddress, setEmailAddress] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailAddress(e.target.value);
        setShowError(false);
    };

    // For demo purposes fields are not validated. We always go back to home. 
    const handleSendEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/');

        // Code here to validate inputs. Ensure valid email. Ensure password is complicated etc.
        if (emailAddress.trim() === "") {
            setShowError(true);
            return;
        }

        // Code here to send email and display a message to tell user to check their email. 
        // Call API to send email. Perhaps email not in our database and needs to be registered.
        navigate('/');
    }

    return (
        <Container maxWidth="xs"
            sx={{
                maxWidth: '100px',
                height: '400px',
                paddingTop: '100px',
                marginTop: '100px',
                bgcolor: 'background.paper',
                boxShadow: 2,
                borderRadius: 4}}>
            <Stack spacing={2}>
                <Typography variant='h5' textAlign='center'>Forgot Password</Typography>

                <Form>
                    <Stack spacing={2}>
                        <TextField fullWidth
                            label='Email Address'
                            required variant='outlined'
                            size='small'
                            error={showError}
                            value={emailAddress}
                            onChange={(e) => handleChange(e)}
                            helperText={showError ? 'Email is required' : ''}>
                        </TextField>
               
                        <Button
                            fullWidth
                            type='submit'
                            variant='contained'
                            color='primary'
                            onClick={(e) => handleSendEmailClick(e)}>
                            Send Email
                        </Button>
                    </Stack> 
                </Form>

                <Divider></Divider>

                <Typography variant='body2'>Already have an account? <Link to='./../signin'>Sign In</Link></Typography>

            </Stack>
        </Container>
    );
}