import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {Button} from "@mui/material";


const ButtonHome = () => {
    const navigate = useNavigate()
    const handleHomeClick = () => {
          navigate("/")
      }
    return (
         <Button
            className="w-12" 
            variant="text" 
            startIcon={<HomeIcon />} 
            onClick={handleHomeClick}
            style={{color:"red"}}
        >
            MIGRAMIX
        </Button>
    )
}

export default ButtonHome
