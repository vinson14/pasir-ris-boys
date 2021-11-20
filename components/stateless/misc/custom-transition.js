import { Grow, Slide } from "@mui/material";

const CustomTransition = ({ children, show }) => {
  return (
    <Grow timeout={1000} in={show}>
      {children}
    </Grow>
  );
};

export default CustomTransition;
