import { Box } from '@mui/material';
import SearchBar from '../SearchBar/searchBar';
import MenuContent from './menuContent';
import BaseMenu from './baseMenu';



const WindowsMenu = () => {

    const mainMenu = {
        height: '720px',
        width: '550px',
        background: 'linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(68,68,68,0.9) 10%)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    return (
        <Box sx={mainMenu}>
            <SearchBar placeholder={'Type here to search'} />
            <MenuContent />
            <BaseMenu />
        </Box>
    )
}

export default WindowsMenu