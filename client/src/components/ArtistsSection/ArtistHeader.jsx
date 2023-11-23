import { Grid } from '@mui/material'
import ButtonHome from '../ButtonHome'


const ArtistHeader = () => {
    return (
      <Grid
        container
        spacing={2}
        className="p-10 text-[#F70808] hover:text-[#1f1e1e]"
        style={{ fontFamily: "Audiowide, sans-serif" }}
      >
        <Grid item xs={1}>
          <ButtonHome />
        </Grid>
        <Grid item xs={11}>
          <h1 className="text-5xl font-semibold text-center">Artists</h1>
        </Grid>
      </Grid>
    );
}

export default ArtistHeader
