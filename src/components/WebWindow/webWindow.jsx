import React from 'react'
import Slide from '@mui/material/Slide';
import { Dialog, Button, DialogTitle, ButtonGroup, DialogContent, Box } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const WebWindow = ({ state, dialogOptions }) => {

    const dialogTitleStyle = {
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgb(167, 171, 183, 0.7)',
        padding: 0,
    }

    const dialogContentStyle = {
        padding: 0,
        scrollBehavior: 'smooth',
        scrollPaddingTop: '10%'
    }

    const iconButtonGroup = {
        width: '100%',
        justifyContent: 'end',
        borderRadius: 0
    }

    const iconButtonStyle = {
        functionButton: {
            color: (theme) => theme.palette.grey[500],
            borderRadius: 0
        },
        closeButton: {
            color: (theme) => theme.palette.grey[500],
            borderRadius: 0,
            '&:hover': {
                backgroundColor: '#ff0202',
                color: '#fff'
            }
        }
    }

    return (
        <Dialog
            hideBackdrop={true}
            fullScreen={state.fullScreen}
            maxWidth={'lg'}
            open={!state.close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            TransitionComponent={Transition}
            PaperComponent={PaperComponent}
        >
            <Box onDoubleClick={() => dialogOptions('fullScreen')}>
                <DialogTitle sx={dialogTitleStyle} id="draggable-dialog-title">
                    <ButtonGroup sx={iconButtonGroup}>
                        <Button
                            aria-label="close"
                            onClick={() => dialogOptions('fullScreen')}
                            variant='small'
                            sx={iconButtonStyle.functionButton}
                        >
                            {
                                state.fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />
                            }
                        </Button>
                        <Button
                            aria-label="close"
                            onClick={() => dialogOptions('close')}
                            variant='small'
                            sx={iconButtonStyle.closeButton}
                        >
                            <CloseIcon />
                        </Button>
                    </ButtonGroup >
                </DialogTitle>
            </Box>
            <DialogContent sx={dialogContentStyle}>
                { state.component }
            </DialogContent>
        </Dialog>
    )
}

export default WebWindow