import React from 'react'
import { Box, Typography, Grid, List, ListItem } from '@mui/material';

const ResumeItem = ({ type, title, subtitle, range, descriptions }) => {

    const itemBoxStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'start',
    }

    const subtitleBoxStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: 400,
        flexWrap: 'wrap',
        '@media only screen and (max-width: 700px)': {
            width: 150
        },
        justifyContent: 'space-between'
    }

    const ListStyle = {
        listStyleType: 'disc',
        pl: 2,
        '& .MuiListItem-root': {
            display: 'list-item',
        }
    }

    return (
        <Grid container spacing={{ xs: 4, md: 2 }} columns={12} py={2}>
            <Grid item xs={4} sm={4} md={4}>
                {
                    type ? <Typography variant='h5' align='center' fontWeight={500}>{type}</Typography> : <></>
                }
            </Grid>
            <Grid item sx={itemBoxStyle} xs={8} sm={8} md={8}>
                <Typography variant='h5' fontWeight={500}>{title}</Typography>

                <Box sx={subtitleBoxStyle}>
                    <Typography variant='subtitle1'>{subtitle}</Typography>
                    <Typography variant='subtitle1'>{range}</Typography>
                </Box>
                <List sx={ListStyle}>
                    {
                        descriptions ? descriptions.map((description, idx) => {
                            return <ListItem key={idx}><Typography variant='body1'>{description}</Typography></ListItem>
                        }) : <></>
                    }
                </List>
            </Grid>
        </Grid>
    )
}

export default ResumeItem