import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import profilePic from '../../assets/profile.webp'
import resume from '../../assets/Resume_Alvin_Tsang.pdf'

const About = () => {

  const BoxStyles = {
    minHeight: '500px',
    textJustify: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    gap: 0,
  }

  const ImgStyle = {
    width: 150,
    height: 150,
    borderRadius: 50
  }

  const ContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'start',
    gap: 2,
    padding: 2,
  }

  const IntroStyle = {
    '@media only screen and (min-width: 1040px)': {
      width: 750
    },
    fontSize: '1.1rem',
  }

  const ButtonStyle = {
    color: '#37B1D3',
  }

  return (
    <>
      <Box sx={BoxStyles} id='about'>
        <Box component={'img'} src={profilePic} sx={ImgStyle} />
        <Box sx={ContentStyle}>
          <Typography variant='h4'>About me</Typography>
          <Typography variant='body' sx={IntroStyle}>Hello, my name is Alvin and I am a Front-End Developer based in Toronto. With 3 years of experience, specializing in developing and implementing high-performance web applications using cutting-edge technologies. Expertise in front-end and back-end development, with a focus on optimizing performance, enhancing user experience, and delivering robust, reliable software solutions. Proficient in working with established and emerging frameworks and platforms such as JavaScript, TypeScript, Node.js, Express, Angular, and React.</Typography>
          <a href={resume} target='_blank' rel="noopener noreferrer">
            <Button variant='outlined' size={'small'} sx={ButtonStyle} endIcon={<InsertDriveFileIcon />}>Download Resume</Button>
          </a>
        </Box>
      </Box>
    </>
  )
}

export default About