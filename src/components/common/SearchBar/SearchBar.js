import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/system/Box';

const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
  return (
    <Box>
      <SearchIcon />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        sx={{ width: searchBarWidth }}
      />
    </Box>
  );
};

export default SearchBar;
