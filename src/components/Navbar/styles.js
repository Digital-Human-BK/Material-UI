const drawerWidth = 320;

export const navbarStyles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      backgroundColor: '#101F33',
      color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .Mui-selected': {
      color: 'red',
    },
  },
  icons: {
    color: 'rgba(255, 255, 255, 0.7)!important',
    marginLeft: '20px',
  },
  text: {
    '& span': {
      marginLeft: '-10px',
      fontWeight: '600',
      fontSize: '16px',
    },
  },
};
