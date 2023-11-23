import { Container, Grid } from "@mui/material";
import EventCard from "../PublicEventsSection/EventCard";
import PropTypes from 'prop-types';

const MixEventsList = ({ mixEventsData, loading, error }) => {

  const imgExample = `https://images.unsplash.com/photo-1663245467127-2520ec7bf0ca?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`

  return (
      <div className="font-sans p-8" >  
          <Container maxWidth="lg">
            <Grid container spacing={3} justifyContent="center">
              {loading ? (
                <p>Loading data..</p>
              ) : error ? (
                <p>Error: {error.message}</p>
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

MixEventsList.propTypes = {
  mixEventsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    eventimage: PropTypes.string,
    eventtitle: PropTypes.string.isRequired,
    eventdescription: PropTypes.string.isRequired,
    initialdate: PropTypes.string.isRequired,
    finaldate: PropTypes.string.isRequired,
    urlevent: PropTypes.string.isRequired,
    typeofactivity: PropTypes.string.isRequired,
    artistevent: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};

export default MixEventsList
