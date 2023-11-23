import ArtistForm from "./ArtistForm"
import MyEventsArtist from "./MyEventsArtist";
import PropTypes from "prop-types";

const ArtistDashboard = ({artistProfilePic}) => {
  return (
    <div>
      <ArtistForm artistProfilePic={artistProfilePic}/> 
    </div>
  );
}
ArtistDashboard.propTypes = {
  artistProfilePic: PropTypes.string,
};

export default ArtistDashboard; 
