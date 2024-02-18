import React from 'react'
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {

    const BoxStyle = {
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center'
    }
    
    const TypographyStyle = {
        margin: '0 14%',
    }

    const contactList = [
        {
            icon: null,
            title: 'Phone',
            value: '437-268-3601'
        },
        {
            icon: null,
            title: 'Email',
            value: 'alvinbno@gmail.com'
        },
        {
            icon: null,
            title: 'Address',
            value: 'Toronto, Ontario, Canada'
        },
        {
            icon: <LinkedIn />,
            title: 'LinkedIn',
            value: 'https://www.linkedin.com/in/at0606'
        },
        {
            icon: <GitHub />,
            title: 'Github',
            value: 'https://github.com/alvin66tsang'
        },
    ]

    const ItemDetail = ({title, value, icon}) => {
        return (
            <Grid item xs={6} sm={6} md={4}>
                <Typography variant='h6'>{title}</Typography>
                {
                    icon == null? 
                    <Typography variant='body'>{value}</Typography> :
                    <a href={value} target='_blank' rel='noopener noreferrer'>
                        <IconButton aria-label={title}>
                            {icon}
                        </IconButton>
                    </a>
                }
            </Grid>
        )
    }

    return (
        <Box py={2} sx={{ backgroundColor: '#fafafa'}} id='contact'>
            <Typography variant='h4' sx={TypographyStyle}>Contact Details</Typography>
            <Box sx={BoxStyle}>
                <Grid container columns={12} py={8} rowGap={4}>
                {
                    contactList.map((detail, idx) => {
                        return <ItemDetail key={idx} {...detail} />
                    })
                }
                </Grid>
            </Box>
        </Box>
  )
}

export default Contact