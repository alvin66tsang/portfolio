import React from 'react'
import { MenuItem, Button, Divider } from '@mui/material';

const BaseMenuItem = ({icon, content, underline}) => {

    const ColorStyle = {
        color: '#fff',
        borderColor: '#fff'
    }

    return (
        <>
            <MenuItem>
                <Button startIcon={icon} sx={ColorStyle} size='small'>
                    {content}
                </Button>
            </MenuItem>
            {
                underline? <Divider sx={ColorStyle} /> : <></>
            }
        </>
    )
}

export default BaseMenuItem