import { useState } from 'react';

import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';

const NotificationBell = ({ iconColor }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (ev) => {
    setAnchorEl(ev.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifications = [
    {
      id: 0,
      label: 'First notifications',
    },
    {
      id: 1,
      label: 'Second Notification',
    },
  ];

  const newNotifications = `You have ${notifications.length} new notifications`;
  const noNotifications = 'No new notifications';

  return (
    <Box>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
        >
          <Badge badgeContent={notifications.length} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        menuItems={notifications}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default NotificationBell;
