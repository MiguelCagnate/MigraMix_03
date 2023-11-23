import { Box, Typography, Modal, Stack, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PropTypes } from 'prop-types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
    };


function SuccesfullModal({ open, onClose, onClick, description, infoButton }) {

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <CheckCircleIcon fontSize='large' className='text-lime-500'/>
                        <Typography id="modal-modal-title" variant='h5' component="h2" sx={{textAlign: 'center'}}>
                            {description}
                        </Typography>
                        <Button
                            variant='contained'
                            size="large"
                            onClick={onClick}
                            sx={{ backgroundColor: '#2B2D42', color: 'white', textAlign: 'center', '&:hover':{backgroundColor: '#9C9FA5'}}}
                        >
                            {infoButton}
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}


SuccesfullModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    description: PropTypes.string,
    infoButton:  PropTypes.string
};
export default SuccesfullModal


