import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import { ImageListItem, Box, Typography } from '@mui/material';
import './lightBox.css'

const LightBox = ({src, desc, dataSet}) => {

    const BoxStyle = {
        width: 550, 
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
    const [open, setOpen] = React.useState(false);

    return (
        <Box component={'button'} onClick={setOpen} sx={BoxStyle}>
            <ImageListItem>
                <img
                    alt={desc}
                    src={src}
                    loading="lazy"
                    />
                <Typography variant='h5' mt={4} color={'#000'}>{desc}</Typography>
            </ImageListItem>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{src: src}]}
            />
        </Box>
    )
}

export default LightBox