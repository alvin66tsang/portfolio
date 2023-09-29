import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import { ImageListItem, Box, Typography } from '@mui/material';
import './lightBox.css'

const LightBox = ({src, desc}) => {

    const BoxStyle = {
        width: 'auto', 
        backgroundColor: 'transparent', 
        borderColor: 'transparent', 
        boxShadow: 'none', 
        objectFit: 'contain !important',
        padding: '16px',
        borderRadius: '10px',
        transition: 'all 0.25s ease-in',
        '&:hover': {
            backgroundColor: '#f0f0f0'
        },
    }
    const [open, setOpen] = useState(false);

    return (
        <Box component={'button'} onClick={setOpen} sx={BoxStyle}>
            <ImageListItem>
                <img
                    alt={desc}
                    src={process.env.PUBLIC_URL + src}
                    loading="lazy"
                    />
                <Typography variant='subtitle2' mt={4} color={'#000'}>{desc}</Typography>
            </ImageListItem>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{src: process.env.PUBLIC_URL + src}]}
            />
        </Box>
    )
}

export default LightBox