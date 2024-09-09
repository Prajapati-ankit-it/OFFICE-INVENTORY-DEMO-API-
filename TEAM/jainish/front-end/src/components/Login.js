import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Paper,
  Grid2,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const paperStyle = {
    padding: 20,
    width: 280,
    height: "43vh",
    margin: "100px auto",
  };
  const avatarStyle = { backgroundColor: "#656565" };
  const buttonStyle = { margin: "25px 0" };
  const linkStyle = { margin: "5px 0", color: "#656565", fontSize: "15px" };
  const txtStyle = { margin: "5px 0" };
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <Grid2>
      <Paper elevation={10} style={paperStyle}>
        <Grid2 align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            placeholder="Enter Username or Email"
            variant="standard"
            fullWidth
            required
            style={txtStyle}
          ></TextField>
          <TextField
            label="Password"
            placeholder="Enter Password"
            type={showPassword ? 'text' : 'password'}
            variant="standard"
            fullWidth
            required
            style={txtStyle}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{ fontSize: 17 }}
                        >
                            {showPassword ? <VisibilityOff fontSize="inherit" /> : <Visibility fontSize="inherit" />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
          ></TextField>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={buttonStyle}
          >
            Login
          </Button>
        </form>
        <Typography style={linkStyle}>
          <Link component={RouterLink} to="/forgotPassword">
            Forgot Password ?
          </Link>
        </Typography>
        <Typography style={linkStyle}>
          Don't have an account? <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid2>
  );
};

export default Login;
