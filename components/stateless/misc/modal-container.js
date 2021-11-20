import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const ModalContainer = ({ open, onClose, children, title }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <Box
        px={3}
        pt={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <DialogTitle>{title}</DialogTitle>
        <IconButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalContainer;
