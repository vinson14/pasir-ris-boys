import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const ProfileCard = ({ name, picture, result }) => {
  const avatarHeight = 100;
  const avatarSx = { height: avatarHeight, width: avatarHeight };
  return (
    <Grid item xs={12} lg={4} p={3}>
      <Card>
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Avatar alt={name} src={picture} sx={avatarSx} />
            <Box p={3}>
              <Typography align="center">${result}</Typography>
              <Typography align="center">{name}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProfileCard;
