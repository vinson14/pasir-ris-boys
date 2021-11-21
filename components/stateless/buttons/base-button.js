import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const BaseButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      aria-label={children}
      sx={{ width: 160, my: 1 }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
