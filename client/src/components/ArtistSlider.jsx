import { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/Slide.css";
import axios from 'axios';

const ArtistSlider = () => {
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
        const randomCompare = () => Math.random() - 0.5;
        const shuffledArtists = data.sort(randomCompare).slice(0, 4);
        setArtistData(shuffledArtists)
        setLoading(false)

      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
  },[])

  return (
    <div className="w-4/6 mx-auto rounded-xl overflow-hidden ">
      <Carousel showThumbs={false}>
        {loading ? (
          <p>
            Loading data...
          </p>
        ) : error ? (
          <p>
            Error: {error.message}
          </p>
        ) : (
          artistData.map((artist) => (
            <div key={artist.id} className="relative">
              <div
                style={{
                  backgroundImage: `url(${artist.artistsprofilepicture})`,
                }}
                className="bg-cover bg-clip-border bg-center h-[35rem] text-gray-700"
              >
                <div className="to-bg-black-10 h-full bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-8 m-5">
                <h2 className="mb-4 block text-3xl font-bold leading-[1.5] tracking-normal p-18 m-2 font-custom">
                  {artist.username}
                </h2>
                <div>
                  <h5 className="block font-custom text-lg font-semibold leading-snug tracking-normal text-gray-200 p-18 whitespace-pre-wrap text-ellipsis m-2">
                    {artist.artistbio}
                  </h5>
                </div>
              </div>
            </div>
          )
          ))}
      </Carousel>
    </div>
  );
};

export default ArtistSlider;
