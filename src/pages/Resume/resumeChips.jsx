import { Chip, Grid, Typography, Box } from '@mui/material';

const ResumeChips = ({type, skills}) => {

    const BoxItemStyle = {
        maxWidth: '700px'
    }

    return (
        <Grid container spacing={{ xs: 4, md: 2 }} columns={12} py={2}>
            <Grid item xs={4} sm={4} md={4}>
                {
                    type ? <Typography variant='h5' align='center' fontWeight={500}>{type}</Typography> : <></>
                }
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
                <Box sx={BoxItemStyle}>
                    {
                        skills? skills.map((skill, idx) => {
                            return <Chip sx={{m: 0.5}} label={skill} key={idx}/>
                        }) : <></>
                    }
                </Box>
            </Grid>
        </Grid>
    )
}

export default ResumeChips