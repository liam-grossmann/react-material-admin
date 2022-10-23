import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container, Divider, Stack, TextField, Typography } from "@mui/material";

export default function ResetPassword() {

    interface State {
        emailAddress: string;
    }

    const navigate = useNavigate();

    const [values, setValues] = useState<State>({
        emailAddress: '',
    });
    
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleSendEmailClick = () => {
        navigate('/');
    }
    
    return (
        <Container maxWidth="xs">
            <Stack spacing={2}>
                <Typography variant='h5' textAlign='center'>Forgot Password</Typography>
                <TextField label='Email Address'
                    required variant='outlined'
                    size='small'
                    error={!values.emailAddress}
                    value={values.emailAddress}
                    onChange={handleChange('emailAddress')}
                    helperText={!values.emailAddress ? 'Email is required' : ''}>
                </TextField>
            
                <Button variant='contained' color='primary' onClick={handleSendEmailClick}>Send Email</Button>

                <Divider></Divider>

                <Typography variant='body2'>Already have an account? <Link to='./../signin'>Sign In</Link></Typography>

            </Stack>
        </Container>
    );
}