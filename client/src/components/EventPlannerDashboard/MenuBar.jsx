import { Card,List,ListItem,ListItemPrefix} from "@material-tailwind/react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FestivalIcon from '@mui/icons-material/Festival';
import EventPlannerHeader from './EventPlannerHeader'
import PropTypes from "prop-types";

function MenuBar({onMenuClick, profilePhoto, username, fullname}) {
    const token = localStorage.getItem('token');

    const handleLogOut = async () => {
        try {
            localStorage.removeItem(`${token}`)
            window.location.href = '/'
        } catch (error) {
            console.error("Logout Failed")
        }
    }
        return (
        <Card className="h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 bg-gradient-to-t from-red-300 to-neutral-50 shadow-lg shadow-red-300">
            <div className="mb-4 p-6">
                <EventPlannerHeader 
                    fullname={fullname}
                    username={username}
                    profilePhoto={profilePhoto}
                />
            </div>
            <List>
            <ListItem 
                className="mb-2 p-4"
                onClick={() => onMenuClick('editProfile')}
            >
                <ListItemPrefix>
                    <ManageAccountsIcon/>
                </ListItemPrefix>
                Edit Profile
            </ListItem>
            <ListItem 
                className="mb-2 p-4"
                onClick={() => onMenuClick('createEvent')}
            >
                <ListItemPrefix>
                    <EditCalendarIcon/>
                </ListItemPrefix>
                Create Event
            </ListItem>
            <ListItem 
                className="mb-2 p-4"
                onClick={() => onMenuClick('myEvents')}
            >
                <ListItemPrefix>
                    <FestivalIcon/>
                </ListItemPrefix>
                My events
            </ListItem>
            <ListItem 
                className="mb-2 p-4"
                onClick={handleLogOut}
            >
                <ListItemPrefix>
                    <ExitToAppIcon/>
                </ListItemPrefix>
                Log Out
            </ListItem>
            </List>
        </Card>
        );
    }

MenuBar.propTypes = {
    onMenuClick: PropTypes.func,
    profilePhoto: PropTypes.string,
    username: PropTypes.string, 
    fullname: PropTypes.string
}

export default MenuBar