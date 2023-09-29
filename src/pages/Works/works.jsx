import React from 'react'
import LightBox from './lightBox'
import { Typography, ImageList, Box } from '@mui/material';
import data from '../../data/data.json'

const Works = () => {

    const BoxStyle = {
        backgroundColor: '#fff',
        minHeight: '300px',
        margin: '4% 14%',
    }

    const works = data.works
    // [
    //     {
    //         src: require('../../assets/works/a.png'),
    //         desc: 'AAS'
    //     },
    //     {
    //         src: require('../../assets/works/b.png'),
    //         desc: 'Flexsystem'
    //     },
    //     {
    //         src: require('../../assets/works/c.png'),
    //         desc: 'RichFame'
    //     },
    //     {
    //         src: require('../../assets/works/d.png'),
    //         desc: 'RichFrame'
    //     },
    //     {
    //         src: require('../../assets/works/e.png'),
    //         desc: 'AAS-Migration'
    //     },
    // ]

    return (
        <Box sx={BoxStyle} id='works'>
            <Typography variant='h5'>My work</Typography>
            <ImageList gap={32}>
                {
                    works.map((d, idx) => {
                        return <LightBox {...d} key={idx} dataSet={works}></LightBox>
                    })
                }
            </ImageList>
        </Box>
    )
}

export default Works