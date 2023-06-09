import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {useState} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { postData } from "./Component/Api/ServerServices";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';


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

export default function SignInSide() {

  const[userId,setUserId]=useState('')
  const[passWord,setPassword]=useState('')
  const navigate = useNavigate();

  
    const handleClick = async() => {
      var body={userid:userId,password:passWord}
      console.log(body)
      var response=await postData('login/checkuser',body)
      if(response.status)
      {
          Swal.fire({
             
              icon: 'success',
              title: 'Login successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/home')
      }
      else{
           
          Swal.fire({
           
              icon: 'error',
              title: 'Invalid Id or Password',
              showConfirmButton: false,
              timer: 1500
            })
            
      }
    };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                onChange={(event)=>setUserId(event.target.value)}
                required
                fullWidth
                label="Email Address"
                autoFocus
              />
              <TextField
                margin="normal"
                onChange={(event)=>setPassword(event.target.value)}
                required
                fullWidth
                label="Password"
                type="password"
              />
              <Button
                fullWidth
                onClick={()=>handleClick()}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
        
                </Grid>
                <Grid item>
                  <Link href="/signup" button=".MuiLink-button" className="nav-link active">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}