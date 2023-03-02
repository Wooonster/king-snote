import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://github.com/Wooonster">
        King's Notes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/homepage')
  }

  return (
    <Container maxWidth="sm">
      {/* head */}
      <Box
        sx={{
          display: "flex",
          marginTop: 10,
          flexDirection: "column",
          // alignItems: 'center'
        }}
      >
        <Avatar sx={{ bgcolor: yellow[500], alignSelf: "center", m: 1.5 }}>
          <VpnKeyIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            autoFocus
            margin="normal"
            id="outlined-required"
            label="Email Address"
            type='email'
          />
          <TextField
            required
            fullWidth
            margin="normal"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            sx={{ mt: 3 }}
            control={<Checkbox />}
            label="Remember me"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 1.5, mb: 2 }}
            onClick={handleClick}
          >
            Signin
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs>
              <Link to='/signup'>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8 }} />
    </Container>
  );
}

export default Login;
