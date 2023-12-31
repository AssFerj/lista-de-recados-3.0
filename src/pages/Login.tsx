import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loginAction } from '../store/modules/userSlice';
import { theme } from '../config/Theme/Theme';
import { alpha } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://curriculum-web-j3bj.vercel.app/" sx={{
        "&:hover":{
          color: `${theme.palette.primary.contrastText}`
        }
      }}>
        Assis Junior
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logedUser = useSelector((state: any)=> state.logedUserReducer);
  console.log(logedUser);
  
  useEffect(() => {
      if(logedUser.id){
      navigate('/home');
      return;
    }
  }, [logedUser, navigate]);

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const logUser = {
      email,
      password
    }
    dispatch(loginAction(logUser));
    // navigate('/home');
    return;
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Recados 3.0 - Login
        </Typography>
        <Box component="form" onSubmit={submitLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            type='email'
            autoFocus
            sx={{
              borderRadius: 1,
              borderColor: `${theme.palette.secondary.main}`,
              background: `${theme.palette.primary.contrastText}`,
              '&:Mui-focused': {
                boxShadow: `${alpha(theme.palette.secondary.light, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.secondary.light,
              }
            }}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{
              borderRadius: 1,
              borderColor: `${theme.palette.secondary.main}`,
              background: `${theme.palette.primary.contrastText}`,
              '&:Mui-focused': {
                boxShadow: `${alpha(theme.palette.secondary.light, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.secondary.light,
              }
            }}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3, 
              mb: 2,
              background: `${theme.palette.secondary.dark}`,
              "&:hover":{
                background: `${theme.palette.primary.dark}`,
                color: `${theme.palette.primary.contrastText}`
              }
            }}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/cadastro" variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: `${theme.palette.secondary.light}`,
                  "&:hover":{
                    color: `${theme.palette.primary.contrastText}`
                  }
                }}
              >
                {"Não tem uma conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4, color: `${theme.palette.secondary.light}` }} />
    </Container>
  );
}
