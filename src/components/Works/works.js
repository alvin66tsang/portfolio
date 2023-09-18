import React from 'react'
import LightBox from './lightBox'
import { Typography, ImageList, Box } from '@mui/material';

const Works = () => {

    const BoxStyle = {
        backgroundColor: '#fff',
        minHeight: '300px',
        margin: '4% 14%',
    }

    const data = [
        {
            src: require('../../assets/works/a.png'),
            desc: 'AAS'
        },
        {
            src: require('../../assets/works/b.png'),
            desc: 'Flexsystem'
        },
        {
            src: require('../../assets/works/c.png'),
            desc: 'RichFame'
        },
        {
            src: require('../../assets/works/d.png'),
            desc: 'RichFrame'
        },
        {
            src: require('../../assets/works/e.png'),
            desc: 'AAS-Migration'
        },
    ]

    return (
        <Box sx={BoxStyle} id='works'>
            <Typography variant='h5'>My work</Typography>
            <ImageList cols={2} rowHeight={450} gap={32}>
                {
                    data.map((d, idx) => {
                        return <LightBox {...d} key={idx} dataSet={data}></LightBox>
                    })
                }
            </ImageList>
        </Box>
    )
}

export default Works