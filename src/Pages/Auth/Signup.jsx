import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Wooonster">
        King's Notes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Signup() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          marginTop: 10,
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ bgcolor: "#00e676", alignSelf: "center", m: 1.5 }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography variant="h5">Sign Up</Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                autoFocus
                id="firstname"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="lastname" label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="register-email-address"
                label="Email Address"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree all the conditions by clicking the checkbox."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Signup
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">Aready had an account? Sign In</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8 }} />
    </Container>
  );
}

export default Signup;
