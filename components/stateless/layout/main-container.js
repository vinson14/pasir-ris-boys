import { Box, CircularProgress } from "@mui/material";

const MainContainer = ({ loading, tabulatedResults, children }) => {
  return (
    <Box
      bgcolor="grey.100"
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      {(loading || !tabulatedResults) && <CircularProgress />}
      {!loading && tabulatedResults && children}
    </Box>
  );
};

export default MainContainer;
