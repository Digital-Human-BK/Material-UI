import Button from '@mui/material/Button';

const CommonButton = ({ children, color, disabled, size, sx, variant }) => {
  return (
    <Button
      sx={sx}
      size={size}
      color={color}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
