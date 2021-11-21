import { Grid } from "@mui/material";

const ButtonsContainer = ({ children }) => {
  return (
    <Grid
      xs={12}
      lg={4}
      item
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {children}
    </Grid>
  );
};

export default ButtonsContainer;
