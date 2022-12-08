import { useState } from 'react';
import { cardHeaderStyles } from './styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import BasicCard from '../../common/BasicCard/BasicCard';
import SearchBar from '../../common/SearchBar/SearchBar';
import CommonButton from '../../common/CommonButton/CommonButton';
import GridWrapper from '../../common/GridWrapper/GridWrapper';
import NewUserModal from '../../Modals/NewUserModal/NewUserModal';

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchResults] = useState(users);

  const addNewUser = (data) => {
    users.push({ ...data });
    setOpen(false);
  };

  const getHeader = () => {
    const handleSearch = (value) => {
      filterData(value);
    };

    const filterData = (value) => {
      const lowerCase = value.toLowerCase().trim();
      if (lowerCase === '') {
        setUsers(searchResults);
      } else {
        const filteredData = searchResults.filter((item) => {
          return Object.values(item).some((v) =>
            v.toString().toLowerCase().includes(lowerCase)
          );
        });
        setUsers(filteredData);
      }
    };

    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder='Search by email address, phone number, or user ID'
          onChange={(ev) => handleSearch(ev.target.value)}
          searchBarWidth='720px'
        />
        <Box>
          <CommonButton
            variant='contained'
            onClick={addUser}
            size='large'
            sx={cardHeaderStyles.addUserButton}
          >
            Add User
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => {
    return (
      <>
        {users.length ? (
          users.map((user) => (
            <Box key={user.email} sx={{ mb: '20px' }}>
              <Typography>User ID: {user.userId}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Typography>Phone Number: {user.phoneNumber}</Typography>
            </Box>
          ))
        ) : (
          <Typography
            align='center'
            sx={{
              margin: '40px 16px',
              color: 'rgba(0, 0, 0, 0.6)',
              fontSize: '1.3rem',
            }}
          >
            No Users for this project yet
          </Typography>
        )}
      </>
    );
  };
  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal
        open={open}
        onClose={() => setOpen(false)}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  );
};

export default Authentication;
