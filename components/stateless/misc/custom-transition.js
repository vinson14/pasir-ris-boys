import { Slide } from "@mui/material";

const CustomTransition = ({ children, show }) => {
  return (
    <Slide direction="left" timeout={1000} in={show}>
      {children}
    </Slide>
  );
};

export default CustomTransition;
