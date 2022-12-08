import Button from '@mui/material/Button';

const CommonButton = ({ children, color, disabled, size, sx, variant, onClick }) => {
  return (
    <Button
      sx={sx}
      size={size}
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
