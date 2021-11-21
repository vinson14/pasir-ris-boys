import { Grid } from "@mui/material";

const ProfileCardGridItem = ({ children }) => {
  return (
    <Grid item xs={12} sm={8} md={4} lg={3} py={1}>
      {children}
    </Grid>
  );
};

export default ProfileCardGridItem;
