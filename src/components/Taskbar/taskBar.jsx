import React, { useState } from 'react'
import { Box, AppBar } from '@mui/material';
import Date from '../Date/date'
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SourceIcon from '@mui/icons-material/Source';
import ContactsIcon from '@mui/icons-material/Contacts';
import TooltipIcon from '../TooltipIcon/tooltipIcon';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import WindowsMenu from '../windowsMenu/windowsMenu';
import PopoverElemnet from '../Popover/popover';

const Taskbar = ({ setSection }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const taskbarIcon = [
        {
            title: 'Start',
            section: null,
            icon: <MicrosoftIcon />,
            eventAction: handleClick
        },
        {
            title: 'About',
            section: 'about',
            icon: <PersonIcon />,
            eventAction: setSection
        },
        {
            title: 'Resume',
            section: 'resume',
            icon: <AssignmentIndIcon />,
            eventAction: setSection
        },
        {
            title: 'Works',
            section: 'works',
            icon: <SourceIcon />,
            eventAction: setSection
        },
        {
            title: 'Contact',
            section: 'contact',
            icon: <ContactsIcon />,
            eventAction: setSection
        },
    ]

    const bottomAppbarStyle = {
        top: 'auto',
        bottom: 0,
        height: 40,
        backgroundColor: 'rgb(29, 29, 29)',
        position: 'fixed',
    }

    const bottomContainerStyle = {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-evenly'
    }

    const bottomHiddenStyle = {
        width: '100%',
        marginLeft: 3
    }

    const bottomBoxStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2.1rem',
        gap: 1,
    }

    return (
        <>
            <AppBar sx={bottomAppbarStyle}>
                <Box sx={bottomContainerStyle}>
                    <Box sx={bottomHiddenStyle}></Box>
                    <Box sx={bottomBoxStyle}>
                        {
                            taskbarIcon.map((icon, idx) => {
                                return <TooltipIcon key={idx} {...icon} />
                            })
                        }
                    </Box>
                    <Date />
                </Box>
            </AppBar>
            <PopoverElemnet 
                open={open}
                handleClose={handleClose} 
                content={<WindowsMenu />} 
                anchorOriginH={'center'} 
                anchorOriginV={'bottom'} 
                transformOriginH={'center'} 
                transformOriginV={'top'}
            />
        </>
    )
}

export default Taskbar