import React from 'react'
import { Button, Tooltip } from '@mui/material';

const TooltipIcon = ({ title, section, icon, eventAction }) => {

    const bottomIconStyle = {
        color: '#fff',
        padding: 0.5,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(237, 237, 237, 0.35)',
            borderRadius: 2,
            opacity: 0.75
        }
    }

    return (
        <Tooltip title={title} placement="top-start">
            <Button sx={bottomIconStyle} onClick={(e) => section ? eventAction(section) : eventAction(e)}>
                {icon}
            </Button>
        </Tooltip>
    )
}

export default TooltipIcon