import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { postData } from "./Component/Api/ServerServices";
import Swal from "sweetalert2";
import {useState} from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[userId,setUserId]=useState('')
    const[passWord,setPassword]=useState('')
    const[mobileNo,setMobileNo]=useState('')

  const handleClick = async() => {
    var body={userid:userId,mobileno:mobileNo,firstname:firstName,lastname:lastName,password:passWord}
    console.log(body)
    var response=await postData('login/addnewuser',body)
    if(response.status)
    {

        Swal.fire({
           
            icon: 'success',
            title: 'User has been registered',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else{
         
        Swal.fire({
         
            icon: 'error',
            title: 'Failed to register the user',
            showConfirmButton: false,
            timer: 1500
          })
          
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(event)=>setFirstName(event.target.value)}
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(event)=>setLastName(event.target.value)}
                  required
                  fullWidth
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(event)=>setUserId(event.target.value)}
                  required
                  fullWidth
                  label="Email Address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(event)=>setPassword(event.target.value)}
                  required
                  fullWidth
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(event)=>setMobileNo(event.target.value)}
                  required
                  fullWidth
                  label="Mobile Number"
                  type="text"
                />
              </Grid>
            </Grid>
            <Button
            onClick={()=>handleClick()}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}