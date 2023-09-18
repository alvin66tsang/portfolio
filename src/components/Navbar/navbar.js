import { useState } from 'react';
import { AppBar, Box, Stack, Link, Typography } from '@mui/material';

const menuList = ['home', 'about', 'resume', 'works', 'contact']

const TypographyStyles = {
    textTransform: 'capitalize',
    color: '#000'
}

const StackStyles = {
    alignSelf: 'center',
    padding: 2,
}

const AppBarStyles = {
    backgroundColor: '#ffffff',
    position: 'sticky',
    top: 0,
    overflowY: 'hidden',
    zIndex: 2
}

const NavBar = ({ setElement }) => {
    const [isActive, setIsActive] = useState('home')
    
    const setActive = (e) => {
        const page = e.target.textContent
        setIsActive(page)
        setElement(page)
    }

    return (
        <AppBar sx={AppBarStyles} component="nav" position='static'>
            <Stack direction={'row'} spacing={4} sx={StackStyles}>
                {
                    menuList.map((item, idx) => {
                        return (
                            <Box component={'div'} onClick={setActive} value={item} key={item} data-to-scrollspy-id={item} color={isActive? '#fff' : '#000'}>
                                <Link key={idx} href={'#' + item} underline={'none'}>
                                    <Typography variant="subtitle1" sx={TypographyStyles}>
                                        {item}
                                    </Typography>
                                </Link>
                            </Box>
                        )
                    })
                }
            </Stack>
        </AppBar>
    )
}

export default NavBar
