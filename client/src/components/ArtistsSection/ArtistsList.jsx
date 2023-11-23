import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ArtistCard from './ArtistCard';
import axios from 'axios';

const ArtistsList = () => {
    const [artistData, setArtistData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchArtistData()
        async function fetchArtistData() {
            try {
                const response = await axios.get('http://localhost:4000/api/artists/artistsList')
                if (response.status !== 200) {
                    throw new Error("Network response was not ok")
                }
                const data = response.data
                setArtistData(data)
                setLoading(false)
            }
            catch (error) {
                setError(error)
                setLoading(false)
            }
        }
    }, [])

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} justifyContent="center">
                {loading ? (
                    <p> Loading data...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    artistData.map((person) =>(
                        <Grid key={person.id} item xs={6}>
                            <ArtistCard 
                                image={person.artistsprofilepicture}
                                user={person.username}
                                bio={person.artistbio}
                                mainLink={person.artistmainlink}
                                musicGenre={person.musicgenre}
                                performance={person.performance}
                                typeOfPerformance={person.type_of_performance}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    )
}

export default ArtistsList
