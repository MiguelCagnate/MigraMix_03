import { useState } from 'react'
import MenuBar from './MenuBar'
import EditProfile from './EditProfile'
import CreateEventSection from './CreateEventSection'
import MyEventsSection from './MyEventsSection'
import WelcomeSection from './WelcomeSection'
import PropTypes from "prop-types";
import UpdateEventSection from './UpdateEventSection'

const EventPlannerDashboard = ({ username, fullname, profilePhoto }) => {
  const [activeSection, setActiveSection] = useState('')
  const [activeEventId, setActiveEventId] = useState(null);
    
  const handlerMenuClick = (section, eventId = null) => {
    setActiveSection(section)
    setActiveEventId(eventId)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <MenuBar 
          onMenuClick= {handlerMenuClick} 
          profilePhoto={profilePhoto}
          username={username}
          fullname={fullname}
        />

        {activeSection !== 'editProfile' 
          && activeSection !== 'createEvent' 
          && activeSection !== 'myEvents' 
          && activeSection !== 'updateEvent'
          && <WelcomeSection />
        }
      
        {activeSection === 'editProfile' && <EditProfile />}
        {activeSection === 'createEvent' && <CreateEventSection />}
        {activeSection === 'myEvents' && (
          <MyEventsSection 
              onEditClick={(eventId) => {
                handlerMenuClick('updateEvent', eventId);
              }} 
          />)}
        {activeSection === 'updateEvent' && 
          <UpdateEventSection activeEventId={activeEventId}/>
        }
    </div>
  )
}

EventPlannerDashboard.propTypes = {
  username: PropTypes.string,
  fullname: PropTypes.string,
  profilePhoto: PropTypes.string
}

export default EventPlannerDashboard