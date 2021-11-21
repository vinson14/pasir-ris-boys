import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BaseButton from "./base-button";

const AddButton = ({ children, ...props }) => {
  return (
    <BaseButton color="primary" startIcon={<AddIcon />} {...props}>
      {children}
    </BaseButton>
  );
};

export default AddButton;
