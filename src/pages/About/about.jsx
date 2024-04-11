import React from 'react'
import { Box, Button, Typography, Link } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import profilePic from '../../assets/profile.jpeg'
import resume from '../../assets/Resume_of_Alvin_Tsang.pdf'
import { LinkedIn } from '@mui/icons-material';

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
    '@media only screen and (max-width: 700px)': {
      display: 'flex',
      my: 6
    },
  }

  const ImgStyle = {
    width: 200,
    height: "auto",
    borderRadius: 10,
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
    width: '100%'
  }

  const ATagStyle = {
    width: 200,
    '@media only screen and (max-width: 700px)': {
      width: '100%'
    },
  }

  return (
    <>
      <Box sx={BoxStyles} id='about' >
        <Box component={'img'} src={profilePic} sx={ImgStyle} />
        <Box sx={ContentStyle}>
          <Typography variant='h4'>About me</Typography>
          <Typography variant='body' sx={IntroStyle}>Experienced web developer skilled in building websites and applications. With expertise in various technologies
            like HTML, CSS, JavaScript, and frameworks such as Angular and React, I focus on creating modern designs and
            improving website performance. I enjoy collaborating with teams to deliver high-quality projects that meet client
            needs. Always eager to learn and stay updated with industry trends, I strive to bring innovation to every project.
          </Typography>
          <Link href={resume} target='_blank' rel="noopener noreferrer" sx={ATagStyle}>
            <Button variant='outlined' sx={ButtonStyle} endIcon={<InsertDriveFileIcon />}>Download Resume</Button>
          </Link>
          <Link href={'https://www.linkedin.com/in/at0606'} sx={ATagStyle}>
            <Button variant='outlined' sx={ButtonStyle} endIcon={<LinkedIn />}>LinkedIn</Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default About