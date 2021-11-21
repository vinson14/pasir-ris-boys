import { Button } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BaseButton from "./base-button";

const EditButton = ({ children, ...props }) => {
  return (
    <BaseButton
      color="secondary"
      startIcon={<FormatListBulletedIcon />}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export default EditButton;
