import React from 'react'
import { Box, Grid, Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MenuContent = () => {

    const ItemBoxStyle = {
        marginTop: '16px',
        width: '100%',
        color: '#fff'
    }

    const ButtonStyle = {
        background: 'rgba(50,50,50,1) 12%',
        '&:hover, &:active': {
            background: 'rgba(50,50,50,0.5) 12%'
        }
    }

    const GridItemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    }

    const Title = ({ title, btnTitle}) => {
        return (
            <Box sx={ItemBoxStyle}>
                <Grid item xs={12} sx={GridItemStyle}>
                    <Typography variant='body1'>{title}</Typography>
                    <Button size='small' variant={'contained'} endIcon={<ArrowForwardIosIcon />} sx={ButtonStyle}>{btnTitle}</Button>
                </Grid>
            </Box>
        )
    }

    return (
        <Grid container spacing={2} width={'100%'} m={0} flex={3}>
            <Title title={'Pinnded'} btnTitle={'All Apps'} />
            <Title title={'Recommended'} btnTitle={'More'} />
        </Grid>
    )
}

export default MenuContent