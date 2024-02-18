import { Typography, Box } from '@mui/material'
import React from 'react'
import bgImg from '../../assets/backgroundImg.jpg'

const Intro = () => {

    const BoxStyles = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '700px',
        textJustify: 'auto',
        textAlign: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        opacity: '75%'
    }

    const SubtitleStyles = {
        fontSize: '1.5rem',
        color: '#f0f0f0'
    }

    return (
        <Box sx={BoxStyles} id={'home'}>
            <Typography variant='h2'>Alvin Tsang</Typography>
            <Typography variant='subtitle1' width={'75%'} sx={SubtitleStyles}>
                I'm a Toronto-based <strong style={{ color: '#ffffff', fontSize: '1.5rem' }}>Front-End / Web Developer</strong>. I am an enthusiastic individual who thrives on challenges,
                embraces rapid learning, and is dedicated to continuously enhancing my coding skills.
            </Typography>
        </Box>
    )
}

export default Intro