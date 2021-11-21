import { Container, Grid } from "@mui/material";
import MetaDataHead from "../misc/meta-data-head";

const ProfileCardsContainer = ({ children }) => {
  return (
    <Container sx={{ py: 3, height: "100%" }}>
      <MetaDataHead />
      <Grid container>{children}</Grid>
    </Container>
  );
};

export default ProfileCardsContainer;
