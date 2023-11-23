import PropTypes from 'prop-types'

const EventPlannerHeader = ({fullname, profilePhoto, username}) => {
  return (
    <div>
        <img
            src={profilePhoto}
            alt="Avatar user"
            className="w-20 md:w-32 rounded-full mx-auto"
            style={{
              maxWidth: '250px',
            }}
        />
        <h2 className="font-bold text-2xl text-center text-gray-700 pt-4">
            {fullname}
        </h2>
        <h3 className="font-bold text-base text-center text-gray-700 pt-4">{username}</h3>
    </div>
  )
}

EventPlannerHeader.propTypes = {
  fullname: PropTypes.string,
  profilePhoto: PropTypes.string,
  username: PropTypes.string,
}

export default EventPlannerHeader
