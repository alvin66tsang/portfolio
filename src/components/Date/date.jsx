import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Box, Typography } from '@mui/material';

const Date = () => {

    const currentDate = moment().format('YYYY/MM/D');
    const [currentTime, setCurrentTime] = useState(moment().format('LT'))

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format('LT'))
        }, 1000)

        return () => clearInterval(interval)
    }, [currentTime])

    const bottomTimeStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'end',
        marginRight: 3,
    }

    return (
        <Box sx={bottomTimeStyle}>
            <Typography variant='body2'>{currentTime}</Typography>
            <Typography variant='caption'>{currentDate}</Typography>
        </Box>
    )
}

export default Date