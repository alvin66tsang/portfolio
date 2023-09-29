import React from 'react'
import { Popover } from '@mui/material';

const PopoverElemnet = ({ open, handleClose, content, anchorOriginV, anchorOriginH, transformOriginV, transformOriginH }) => {

    const PopoverStyle = {
        borderRadius: 0
    }

    return (
        <Popover
            open={open}
            sx={PopoverStyle}
            anchorOrigin={{
                vertical: anchorOriginV,
                horizontal: anchorOriginH,
            }}
            transformOrigin={{
                vertical: transformOriginV,
                horizontal: transformOriginH,
            }}
            onClose={handleClose}
        >
            {content}
        </Popover>
    )
}

export default PopoverElemnet