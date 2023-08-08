import { Grid, CssBaseline, Paper, Box, Avatar, Typography, TextField, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

// ============== Yup ==============
import { schemaSignIn } from "./auth-schema.yup";
import { yupResolver } from "@hookform/resolvers/yup";

// ============== Types ==============
import { SignInDto } from "./types/sign-in-dto.type";

// ============== Components ==============


// ============== Icons ==============
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Controller, FieldValues, useForm } from "react-hook-form";
import theme from "theme";
import { signIn } from "app/api/auth";
import Cookies from "js-cookie";
import { useState } from "react";
import ErrorAlert from "components/error-alert.component";

export default function AuthSignInPage() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaSignIn),
    defaultValues: { email: '', password: '' }
  });

  const handleSubmitForm = (data: FieldValues) => {
    const dto: SignInDto = {
      email: data.email,
      password: data.password
    };
    signIn(dto)
      .then(({data}) => {
        Cookies.set('access_token', data.access_token);
        Cookies.set('expired_at', data.expired_at);
        reset();
        navigate('/', { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsError(true);
      }) 
  }

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${'https://images.unsplash.com/photo-1611262588019-db6cc2032da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: theme.palette.primary.main,
                color: 'white'
              }}
            >
              <LoginOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(handleSubmitForm)}
              sx={{ mt: 1 }}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <TextField
                        helperText={errors.email ? `${errors.email.message}`: ''}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        error={errors.email ? true : false}
                        {...field} />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <TextField
                      helperText={errors.password ? `${errors.password.message}`: ''}
                      margin="normal"
                      fullWidth
                      label="Password"
                      type="password"
                      id="password"
                      error={errors.password ? true : false}
                      {...field} />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: '20px',
                  '&:hover': {
                    color: 'white',
                  }
                }}
              >
                Sign in
              </Button>
              <Grid container>
                <Grid item>
                  <NavLink to="/app/auth/sign-up" style={{ color: theme.palette.primary.main }}>
                    {"Don't have an account? Create!"}
                  </NavLink>
                </Grid>
                <Grid
                  container
                  item
                  sx={{ marginTop: '30px' }}
                >
                  {isError && <ErrorAlert title="Error" text={errorMessage} />}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}