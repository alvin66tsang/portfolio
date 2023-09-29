import React from 'react'
import { Box } from '@mui/material';

const Footer = () => {

    const footerStyle = {
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#e9e9e9',
        minHeight: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Box sx={footerStyle}>
            <span>© Copyright 2023 - Alvin Tsang</span>
        </Box>
    )
}

export default Footer