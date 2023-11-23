import { useState, useEffect, useMemo } from "react";
import { Container, Grid, Avatar, Typography, Box, Stack} from "@mui/material";
import FestivalIcon from '@mui/icons-material/Festival';
import EventCard from "../PublicEventsSection/EventCard";
import RedButton from "../RedButton";
import axios from "axios";
import SuccesfullModal from "../SignUp/SuccesfullModal";
import PropTypes from "prop-types";

const MyEventsSection = ({onEditClick}) => {

  const [mixEventsData, setMixEventsData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [open, setOpen] = useState(false);
  const [eventDeleted, setEventDeleted] = useState(false)

  const token = localStorage.getItem('token');
  const imgExample = `https://images.unsplash.com/photo-1663245467127-2520ec7bf0ca?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

  useEffect(() => {
    fetchMixEventsData();
    async function fetchMixEventsData() {
      try {
        const response = await axios.get('http://localhost:4000/api/events/eventsByOrganizer', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache',
          },
        });
        const data = response.data;
          setMixEventsData(data);
          setLoading(false);

      } catch (error) {
        if (error.response && error.response.status === 404) {
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      }
    }
  }, [token]);
  

  const deleteEvent = (eventId) => {
    axios.delete(`http://localhost:4000/api/events/delete-event/${eventId}`, { 
      headers: {
          Authorization: `Bearer ${token}`,
      }
  })
  .then((response) => {
      if (response.status === 200) {
          setEventDeleted(true)
      }
  })
  .catch((error) => {console.log(error.data);})
  }

  useEffect(() => {
    if (eventDeleted) {
      setOpen(true)
      
    }
  }, [eventDeleted])

  const handleExitClick = () => {
    setOpen(false)
}

  const errorsCache = useMemo(() => {
    return error;
  }, [error]);

  return (
    <div style={{ height: '100%', width: '100%'}}> 
        <Container maxWidth="xl">
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
              <FestivalIcon/>
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#2B2D42', fontWeight: 'bold'}}>
              My Events
            </Typography>
            <p className="mb-3 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              This information will be displayed publicly so be careful what you share.
            </p>
            <Grid container spacing={3} justifyContent="center" sx={{ padding: 5 }}>
              {loading ? (
                <p>Loading data..</p>
              ) : errorsCache ? (
                <p>Error: {errorsCache.message}</p>
                ) : mixEventsData.length === 0 ? (
                  <p style={{ color: '#2B2D42', fontWeight: 'bold'}}>There are no events to show</p>
                ) : (
                  mixEventsData.map((event) => (
                    <Grid item xs={4} key={event.id}>
                      <EventCard
                        image={
                          event.eventimage && event.eventimage.length > 0
                            ? event.eventimage
                            : imgExample
                        }
                        title={event.eventtitle}
                        description={event.eventdescription}
                        initialDate={event.initialdate}
                        finalDate={event.finaldate}
                        urlEvent={event.urlevent}
                        price={
                          event.typeofactivity === "Free"
                            ? "Free"
                            : "Paid Activity"
                        }
                        artist={event.artistevent}
                      />
                      <Stack 
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={8}
                        sx={{ padding: 2 }}
                      >
                          <RedButton 
                              info="Edit Event" 
                              size="small"
                              onClick={() => onEditClick(event.id)}
                          />
                          <RedButton 
                              info="Delete Event" 
                              size="small" 
                              type="submit"
                              onClick={() => deleteEvent(event.id)}
                          />
                        </Stack>
                          <SuccesfullModal
                            open={open}
                            onClose={() => setOpen(false)}
                            onClick={handleExitClick}
                            description= "The event has been delete succesfully"
                            infoButton="Close"
                          />
                    </Grid>
                  ))
                )}
            </Grid>      
          </Box>
        </Container>
    </div>
  )
}
MyEventsSection.propTypes = {
  onEditClick: PropTypes.func
};
export default MyEventsSection
