import React from 'react'
import { Box } from '@mui/material';
import wallpaper from '../../assets/wallpaper.jpg'
import GridItem from './gridItem';

const Grid = ({ dialogOptions, setSection }) => {

    const boxStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(15, 1fr)',
        height: '100vh',
        backgroundImage: `url(${wallpaper})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        justifySelf: 'center',
        overflowY: 'hidden'
    }

    return (
        <Box sx={boxStyle}>
            <GridItem className='item' itemTitle={'About Me'} dialogOptions={dialogOptions} setSection={setSection} />
        </Box>
    )
}

export default Grid