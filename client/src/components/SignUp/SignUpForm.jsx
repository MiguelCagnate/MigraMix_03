import { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import DateOfBirth from './DateOfBirth';
import SuccesfullModal from './SuccesfullModal';
import SelectOptions from '../SelectOptions';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <RouterLink color="inherit" to="/">
        Migramix Team
      </RouterLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const SignUpForm = () => {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      dateOfBirth: null,
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRole, setSelectedRole] = useState('Artist');
  const [open, setOpen] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValue('dateOfBirth', date);
  };

  const navigate = useNavigate()
  const handleNextClick = () => {
      navigate("/sign-in")
  }

  const onSubmit = (data) => {
    if (isValid) {
      data.dateOfBirth = selectedDate;
      data.role = selectedRole;
      axios
        .post('/api/sign-up', data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          console.log(response.data);
          if (response.status === 201) {
            setUserCreated(true);
          }
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
  };

  useEffect(() => {
    if (userCreated) {
      setOpen(true);
    }
  }, [userCreated]);

  const errorsCache = useMemo(() => {
    return errors;
  }, [errors]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1529068726703-d4dfa1c99b99?auto=format&fit=crop&q=80&w=3538&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
      }}
    >
      <div className="opacity-70 bg-gray-800 fixed inset-0"></div>

      <div className="relative mt-15">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "white",
                borderRadius:5,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#FF4B4B" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                sx={{ color: "#2B2D42", fontWeight: "bold" }}
              >
                Sign up
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("firstName", {
                        required: "First Name is required",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "invalid Name",
                        },
                      })}
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      error={!!errorsCache.firstName}
                      helperText={
                        errorsCache.firstName &&
                        errorsCache.firstName.message.toString()
                      }
                      autoFocus
                      InputProps={{ style: { fontSize: "16px" } }}
                      InputLabelProps={{ style: { fontSize: "16px" } }}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderWidth: "0.8px",
                          borderColor: "#2B2D42",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("lastName", {
                        required: "Last Name is required",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "invalid Last Name",
                        },
                      })}
                      required
                      fullWidth
                      autoFocus
                      id="lastName"
                      label="Last Name"
                      autoComplete="family-name"
                      error={!!errorsCache.lastname}
                      helperText={
                        errorsCache.lastName &&
                        errorsCache.lastName.message.toString()
                      }
                      InputProps={{ style: { fontSize: "16px" } }}
                      InputLabelProps={{ style: { fontSize: "16px" } }}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderWidth: "0.8px",
                          borderColor: "#2B2D42",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("username", {
                        required: "Username is required",
                        minLength: {
                          value: 1,
                          message: "Must be at least 1 character",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum 20 characters",
                        },
                      })}
                      required
                      fullWidth
                      autoFocus
                      autoComplete="username"
                      id="username"
                      label="Username"
                      error={!!errorsCache.username}
                      helperText={
                        errorsCache.username && errorsCache.username.toString()
                      }
                      InputProps={{ style: { fontSize: "16px" } }}
                      InputLabelProps={{ style: { fontSize: "16px" } }}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderWidth: "0.8px",
                          borderColor: "#2B2D42",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <SelectOptions
                      id="role"
                      label="Role"
                      idField="role"
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      options={[
                        { value: "Artist", label: "Artist" },
                        { value: "Organizer", label: "Organizer" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DateOfBirth
                      onChange={(date) => {
                        setValue("dateOfBirth", date);
                        handleDateChange(date);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "invalid email address",
                        },
                      })}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      autoComplete="email"
                      error={!!errorsCache.email}
                      helperText={
                        errorsCache.email &&
                        errorsCache.email.message.toString()
                      }
                      InputProps={{ style: { fontSize: "16px" } }}
                      InputLabelProps={{ style: { fontSize: "16px" } }}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderWidth: "0.8px",
                          borderColor: "#2B2D42",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Must be at least 8 characters",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum 20 characters",
                        },
                      })}
                      required
                      fullWidth
                      type="password"
                      id="password"
                      label="Password"
                      autoComplete="new-password"
                      error={!!errorsCache.password}
                      helperText={
                        errorsCache.password &&
                        errorsCache.password.message.toString()
                      }
                      InputProps={{ style: { fontSize: "16px" } }}
                      InputLabelProps={{ style: { fontSize: "16px" } }}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderWidth: "0.8px",
                          borderColor: "#2B2D42",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("repeatPassword", {
                        required: "Repeat Password is required",
                        validate: (value) =>
                          value === getValues().password ||
                          "The passwords do not match",
                      })}
                      required
                      fullWidth
                      type="password"
                      id="repeatPassword"
                      label="Repeat Password"
                      name="repeatPassword"
                      autoComplete="new-password"
                      error={!!errorsCache.repeatPassword}
                      helperText={
                        errorsCache.repeatPassword &&
                        errorsCache.repeatPassword.message.toString()
                      }
                      InputProps={{ style: { fontSize: "16px" } }}
                      InputLabelProps={{ style: { fontSize: "16px" } }}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderWidth: "0.8px",
                          borderColor: "#2B2D42",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#020617",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Button>
                <SuccesfullModal
                  open={open}
                  onClose={() => setOpen(false)}
                  onClick={handleNextClick}
                  description="Succesfull Registration"
                  infoButton="Next"
                />
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <RouterLink
                      style={{ textDecoration: "underline", color: "#1776D1" }}
                      to="/sign-in"
                    >
                      Already have an account? Sign in
                    </RouterLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};




export default SignUpForm;
