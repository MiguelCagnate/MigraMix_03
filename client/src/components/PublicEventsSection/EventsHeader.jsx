import { Grid } from '@mui/material'
import ButtonHome from '../ButtonHome'


const EventsHeader = () => {
    return (
      <Grid
        container
        spacing={2}
        className="p-11 text-[#F70808]"
        style={{ fontFamily: "Gayathri, sans-serif" }}
      >
        <Grid item xs={1}>
          <ButtonHome />
        </Grid>
        <Grid item xs={11}>
          <h1 className="text-5xl font-semibold text-center transition duration-500 ease-in-out hover:scale-90">
            Barcelona Local Events
          </h1>
        </Grid>
      </Grid>
    );
}

export default EventsHeader