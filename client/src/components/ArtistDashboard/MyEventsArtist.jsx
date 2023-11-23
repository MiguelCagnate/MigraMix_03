import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from '../PublicEventsSection/EventCard'

const MyEventsArtist = () => {
    const [mixEventsData, setMixEventsData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const token = localStorage.getItem('token');
    const imgExample = `https://images.unsplash.com/photo-1663245467127-2520ec7bf0ca?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

    useEffect(() => {
        fetchMixEventsData();
        async function fetchMixEventsData() {
            try {
                const response = await axios.get('http://localhost:4000/api/events/eventsByArtist', {
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

    return (
        <div id="myEventsArtist">
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent="center">
                {loading ? (
                    <p>Loading data...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                    ) : mixEventsData.length === 0 ? (
                    <p 
                        style={{ color: '#2B2D42', fontWeight: 'bold'}}
                        className="pt-5"
                    >There are no events to show</p>
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
                        </Grid>
                    ))
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default MyEventsArtist
