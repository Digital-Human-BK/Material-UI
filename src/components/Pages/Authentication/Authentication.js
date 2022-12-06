import { Grid } from '@mui/material';
import CommonButton from '../../common/CommonButton/CommonButton';

const Authentication = () => {
  const buttonStyles = {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
      backgroundColor: '#009be5',
      '&:hover': {
        backgroundColor: '#006db3',
      },
    },
    '&.MuiButton-outlined': {
      color: '#fff',
      borderColor: '#fff',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  };

  return (
    <Grid item xs='8'>
      This is Grid
      <CommonButton size='large' variant='contained' sx={buttonStyles}>
        Add User
      </CommonButton>
      <CommonButton variant='outlined' sx={buttonStyles}>
        Web Setup
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
