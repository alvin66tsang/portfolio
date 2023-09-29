import { TextField, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder }) => {

    const SearchBarStyle = {
        width: '100%',
    }

    const InputFieldStyle = {
        lineHeight: '1.2',
        padding: '2px',
        borderRadius: 10
    }

    return (
        <Paper elevation={3}>
            <TextField placeholder={placeholder} sx={SearchBarStyle} variant='standard'
                InputProps={{
                    sx: InputFieldStyle,
                    startAdornment: <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>,
                }}
            ></TextField>
        </Paper>
    )
}

export default SearchBar