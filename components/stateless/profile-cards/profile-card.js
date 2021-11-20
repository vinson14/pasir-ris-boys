import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CustomTransition from "../misc/custom-transition";

const ProfileCard = ({ name, picture, result }) => {
  const avatarHeight = 125;
  const avatarSx = { height: avatarHeight, width: avatarHeight };
  return (
    <CustomTransition show>
      <Grid item xs={12} lg={4} p={3}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar alt={name} src={picture} sx={avatarSx} />
              <Box ml={3}>
                <Typography variant="h6" sx={{ fontWeight: 600 }} align="right">
                  {name.toUpperCase()}
                </Typography>
                <Typography align="right">
                  {result < 0 ? `-$${Math.abs(result)}` : `$${result}`}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </CustomTransition>
  );
};

export default ProfileCard;
