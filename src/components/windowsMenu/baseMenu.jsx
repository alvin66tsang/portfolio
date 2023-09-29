import React, { useState } from 'react'
import { Box, Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import BaseMenuList from './baseMenuList';

const BaseMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const BottomBarStyle = {
        minHeight: '40px',
        margin: '0 -16px -16px ',
        padding: '8px 32px',
        background: 'rgba(50,50,50,1) 12%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '> button': {
            color: '#fff'
        }
    }

    return (
        <Box sx={BottomBarStyle}>
            <Button
                startIcon={<AccountCircleIcon />}
            >
                User
            </Button>
            <IconButton onClick={handleClick}>
                <PowerSettingsNewIcon />
            </IconButton>
            <BaseMenuList handleClose={handleClose} open={open} anchorEl={anchorEl} />
        </Box>
    )
}

export default BaseMenu