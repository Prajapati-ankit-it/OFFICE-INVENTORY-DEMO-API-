import React from 'react';
import { Paper, Grid2, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    const paperStyle = {padding: 20, width: 280, height: '43vh', margin: '100px auto'}
    const avatarStyle = {backgroundColor: '#656565' }
    const buttonStyle = {margin: '25px 0'}
    const linkStyle = {margin: '5px 0', color: '#656565', fontSize: '15px'}
    const txtStyle = {margin: '5px 0'}

    return (
        <Grid2>
            <Paper elevation= {10} style={paperStyle}>
                <Grid2 align = 'center'>
                    <Avatar style = {avatarStyle}><LockIcon/></Avatar>
                    <h2>Login</h2>
                </Grid2>
                <TextField label = 'Username' placeholder = 'Enter Username OR email' variant='standard' fullWidth required style = {txtStyle}></TextField>
                <TextField label = 'Password' placeholder = 'Enter Password' type = 'password' variant='standard' fullWidth required style = {txtStyle}></TextField>
                <Button type ='submit' color = 'primary' variant = 'contained' fullWidth style = {buttonStyle}>Login</Button>
                <Typography style = {linkStyle}>
                    <Link href="#">Forgot Password ?</Link>
                </Typography>
                <Typography style = {linkStyle}>
                    Don't have an account? <Link href="#">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid2>
    );
}

export default Login;