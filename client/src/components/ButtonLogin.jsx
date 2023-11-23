import { Button } from '@mui/material'; 
import Stack from '@mui/material/Stack';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";
//  import BotonProvisorio from './BotonProvisorio';
// import BotonProvisorio2 from './BotonProvisorio2'; 

const ButtonLogin = () => {
    const navigate = useNavigate()
    const handleSignInClick = () => {
        navigate("/sign-in")
    }
    const handleSignUpClick = () => {
        navigate("/sign-up")

    }

    return (
      <Stack
        direction="row"
        spacing={4}
        justifyContent="right"
        marginBottom="25px"
      >
        <Button
          style={{
            color: "#ED0707",
            textTransform: "none",
            borderColor: "#ED0707",
          }}
          startIcon={<PersonAddAltIcon />}
          disabled={false}
          size="small"
          variant="outlined"
          onClick={handleSignUpClick}
        >
          Sign up
        </Button>
        <Button
          style={{
            color: "#ED0707",
            textTransform: "none",
            borderColor: "#ED0707",
          }}
          startIcon={<AccountBoxIcon />}
          disabled={false}
          size="small"
          variant="outlined"
          onClick={handleSignInClick}
        >
          Sign in
        </Button>
        {/* <BotonProvisorio />
        <BotonProvisorio2 /> */}
      </Stack>
    );
}

export default ButtonLogin