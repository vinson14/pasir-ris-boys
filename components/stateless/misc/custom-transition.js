import { Grow, Slide } from "@mui/material";

const CustomTransition = ({ children, show }) => {
  return (
    <Grow direction="left" timeout={1000} in={show}>
      {children}
    </Grow>
  );
};

export default CustomTransition;
