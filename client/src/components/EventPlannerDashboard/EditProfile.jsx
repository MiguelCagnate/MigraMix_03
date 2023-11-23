import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import {Avatar, CssBaseline, TextField, Grid, Box, Typography, Container, Stack} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UploadProfilePhoto from './UploadProfilePhoto';
import RedButton from "../RedButton"
import UrlValidation from "./UrlValidation";
import SuccesfullModal from '../SignUp/SuccesfullModal'
import PropTypes from "prop-types";


const defaultTheme = createTheme();

const EditProfile = () => {
    const { register, handleSubmit, formState: { isValid, errors } } = useForm({
        defaultValues: {
            eventPlannerBio: '',
            eventPlannerMainLink:'',
            eventProfilePicture: null,
        }
    })

    const token = localStorage.getItem('token');
    
    const [eventProfilePictureURL, setEventProfilePictureURL] = useState(null)
    const [open, setOpen] = useState(false);


    const onImageUpload = (url) => {
        setEventProfilePictureURL(url);  
    };
    
    const onSubmit = (data) => {
        if (isValid){
            data.eventProfilePicture = eventProfilePictureURL;
            axios
            .post(`/api/organizers/organizer`, data, 
            {headers: {
                Authorization: `Bearer ${token}`
            }})
            .then(response => {
                console.log(response.data)
                if (response.status === 201) {
                    setOpen(true);
                }
            })
            .catch(error => {console.log(error.response.data)})
        }
    }
    
    const handleExitClick = () => {
        setOpen(false)
    }
    
    return (
        <div className="w-5/6">
            <ThemeProvider theme={defaultTheme}>
                <Container maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    backgroundColor: 'white',
                    }}
                >
                    <Avatar sx={{ m: 2, bgcolor: '#FF4B4B' }}>
                    <ManageAccountsIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ color: '#2B2D42', fontWeight: 'bold'}}>
                    Edit Profile
                    </Typography>
                    <p className="mb-3 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    This information will be displayed publicly so be careful what you share.
                    </p>
                    <Box 
                        component="form" 
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    {...register("eventPlannerBio", {
                                    maxLength : {
                                        value: 300,
                                        message: 'Maximum 300 characters' 
                                    }
                                    })}
                                    fullWidth
                                    autoFocus
                                    autoComplete="Bio"
                                    id="eventPlannerBio"
                                    label="Bio: Write a few sentences about yourself."
                                    InputProps={{ style: { fontSize: '16px' } }} 
                                    InputLabelProps={{ style: { fontSize: '16px' } }}
                                        sx={{
                                        '& .MuiInputBase-root': {
                                            borderWidth: '0.8px', 
                                            borderColor: '#2B2D42'
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                {...register("eventPlannerMainLink", {validate:UrlValidation})}
                                fullWidth
                                id="eventPlannerMainLink"
                                label="Website"
                                autoComplete="Website"
                                error={!!errors.eventPlannerMainLink}
                                helperText={errors.eventPlannerMainLink && (
                                    <Typography variant="caption" color="error">
                                        {errors.eventPlannerMainLink.message}
                                    </Typography>
                                )}
                                InputProps={{ style: { fontSize: '16px' } }} 
                                InputLabelProps={{ style: { fontSize: '16px' } }}
                                sx={{
                                    '& .MuiInputBase-root': {
                                    borderWidth: '0.8px', 
                                    borderColor: '#2B2D42'
                                    },
                                }}
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <UploadProfilePhoto onImageUpload={onImageUpload}/>
                            </Grid>
                        </Grid>
                        <Stack 
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={8}
                        >
                            <RedButton 
                                info="Save" 
                                widen 
                                size="large"
                                type="submit" 
                            />
                           {/* <RedButton info="Delete User" widen size="large" onClick={handleDeleteClick}/> */}

                            <SuccesfullModal
                                open={open}
                                onClose={() => setOpen(false)}
                                onClick={handleExitClick}
                                description= "The profile has been edited successfully."
                                infoButton="Close"
                            />
                        </Stack>
                    </Box>
                </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}

EditProfile.propTypes = {
    onUpdateProfilePhoto: PropTypes.func,
}

export default EditProfile
