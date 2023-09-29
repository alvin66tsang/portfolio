import React from 'react'
import { Box, Typography } from '@mui/material';
import myIcon from '../../assets/icon.png'
import Draggable from 'react-draggable';


const GridItem = ({ itemTitle, dialogOptions, setSection }) => {

    const boxSize = 75

    const customIconStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 1,
        color: '#fff',
        border: '1px solid trasparent',
        width: boxSize,
        height: boxSize,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(237, 237, 237, 0.35)'
        }
    }

    const customIconBodyStyle = {
        width: 50,
        height: 'auto',
        zIndex: -1,
        '&:hover': {
            cursor: 'pointer',
        }
    }

    return (
            <Draggable
                axis="both"
                handle=".item"
                defaultPosition={{x: 50, y: 50}}
                position={null}
                grid={[100,100]}
                scale={1}>
                <Box sx={customIconStyle} className='item' onDoubleClick={() => setSection('home')}>
                    <Box draggable="false" sx={customIconBodyStyle} component={'img'} src={myIcon}/>
                    <Typography variant='body'>{itemTitle}</Typography>
                </Box>
            </Draggable>
    )
}

export default GridItem